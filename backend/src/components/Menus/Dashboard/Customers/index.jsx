import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import PreviewIcon from '@mui/icons-material/RemoveRedEye';


import {
  GridRowModes,
  DataGrid,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from '@mui/x-data-grid';


import {
  randomCreatedDate,
  randomTraderName,
  randomId as generateRandomId,
  randomArrayItem,
} from '@mui/x-data-grid-generator';

const roles = ['Market', 'Finance', 'Development'];
const statuses = ['Active', 'Inactive', 'Pending'];
const randomRole = () => randomArrayItem(roles);
const randomStatus = () => randomArrayItem(statuses);

const createRow = (i) => ({
  id: generateRandomId(),
  serial: i + 1,
  name: randomTraderName(),
  email: `user${i + 1}@example.com`,
  joinDate: randomCreatedDate(),
  role: randomRole(),
  status: randomStatus(),
  buyingProducts: Math.floor(Math.random() * 10) + 1,
});

const initialRows = Array.from({ length: 5 }, (_, i) => createRow(i));



function EditToolbar({ setRows, setRowModesModel }) {
  const handleClick = () => {
    const id = generateRandomId();
    const newRow = {
      id,
      name: '',
      email: '',
      joinDate: new Date(),
      role: '',
      status: '',
      buyingProducts: 0,
      isNew: true,
    };

    setRows((oldRows) => [...oldRows, newRow]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    }));
  };

  return (
    <Box sx={{ padding: 1, display: 'flex', justifyContent: 'flex-end', background: 'cyon'}}>
      <Tooltip title="Add New Member">
        <button
          onClick={handleClick}
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-800"
        >
          Add New Number
        </button>
      </Tooltip>
    </Box>
  );
}

export default function Customers() {
  const [rows, setRows] = useState(initialRows);
  const [rowModesModel, setRowModesModel] = useState({});
  const [previewRow, setPreviewRow] = useState(null);

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow?.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const handlePreviewClick = (id) => () => {
    // Set preview mode for the selected user
    const row = rows.find((r) => r.id === id);
    setPreviewRow(row); // Preview the row
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newModel) => {
    setRowModesModel(newModel);
  };

  const columns = [
    {
      field: 'serial',
      headerName: 'SL',
      width: 70,
      sortable: false,
      editable: false,
    },

    {
      field: 'name',
      headerName: 'User Name',
      width: 180,
      sortable: true,
      editable: true,
    },

    {
      field: 'email',
      headerName: 'Email',
      width: 240,
      sortable: false,
      editable: false,
    },

    {
      field: 'joinDate',
      headerName: 'Date',
      type: 'date',
      width: 120,
      editable: false,
    },
    {
      field: 'role',
      headerName: 'Country',
      width: 160,
      editable: false,
      type: 'singleSelect',
      valueOptions: roles,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 140,
      editable: true,
      type: 'singleSelect',
      valueOptions: statuses,
    },
    
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 150,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              onClick={handleSaveClick(id)}
              sx={{ color: 'primary.main' }}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              onClick={handleCancelClick(id)}
              color="red"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<PreviewIcon className='text-gray-500' />}
            label="Preview"
            onClick={handlePreviewClick(id)} // Trigger preview
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<EditIcon className='text-dark-700'/>}
            label="Edit"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon className='text-red-600'/>}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        height: 600,
        width: '95%',
        marginTop: '20px',
        padding:'0 25px',
        backgroundColor: '#101828',
        '& .actions': {
          color: 'text.secondary',
        },
      }}
    >
      {/* Add New Member Button */}
      <Box sx={{ paddingBottom: 2}}>
        <EditToolbar setRows={setRows} setRowModesModel={setRowModesModel} />
      </Box>

      <DataGrid
      sx={{
        height: 500,
        backgroundColor: '#E8EAED',
        }
      }
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={{ toolbar: EditToolbar }}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
        disableColumnFilter
        disableColumnMenu
        pageSizeOptions={[5, 10]}
        initialState={{
          pagination: { paginationModel: { pageSize: 10, page: 0 } },
        }}
      />
    </Box>
  );
}

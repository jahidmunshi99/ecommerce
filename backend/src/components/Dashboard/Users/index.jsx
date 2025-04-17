import * as React from 'react';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import PreviewIcon from '@mui/icons-material/RemoveRedEye'; // Icon for Preview
import faker from 'faker';
import {
  GridRowModes,
  DataGrid,
  GridActionsCellItem,
  GridRowEditStopReasons,
  GridToolbar,
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
  photo: faker.image.avatar(),
  age: 20 + i,
  joinDate: randomCreatedDate(),
  role: randomRole(),
  status: randomStatus(),
  password: faker.internet.password(),
  buyingProducts: Math.floor(Math.random() * 10) + 1,
});

const initialRows = Array.from({ length: 5 }, (_, i) => createRow(i));

function EditToolbar({ setRows, setRowModesModel }) {
  const handleClick = () => {
    const id = generateRandomId();
    const newRow = {
      id,
      serial: Date.now(), // just a temp unique number
      name: '',
      email: '',
      photo: faker.image.avatar(),
      age: '',
      joinDate: new Date(),
      role: '',
      status: '',
    //   password: '',
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

export default function Users() {
  const [rows, setRows] = React.useState(initialRows);
  const [selectedRows, setSelectedRows] = React.useState({});
  const [rowModesModel, setRowModesModel] = React.useState({});
  const [previewRow, setPreviewRow] = React.useState(null); // Track preview state

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
    field: 'select',
    headerName: '',
    width: 50,
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    renderCell: (params) => (
        <input
        type="checkbox"
        checked={!!selectedRows[params.id]}
        onChange={(e) => {
            const newSelection = { ...selectedRows, [params.id]: e.target.checked };
            if (!e.target.checked) {
            delete newSelection[params.id];
            }
            setSelectedRows(newSelection);
        }}
        />
    ),
    headerClassName: 'checkbox-header',
    },
    {
      field: 'serial',
      headerName: 'SL',
      width: 70,
      sortable: false,
      editable: false,
    },
    {   
    field: 'photo',
    headerName: 'User Image',
    width: 120,
    renderCell: (params) => (
        <img src={params.value} alt="User" style={{ width: 40, height: 40, borderRadius: '50%' }} />
    ),
    },
    {
      field: 'name',
      headerName: 'User Name',
      width: 160,
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
      headerName: 'Created at',
      type: 'date',
      width: 160,
      editable: false,
    },
    {
      field: 'role',
      headerName: 'Role',
      width: 160,
      editable: true,
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
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<PreviewIcon />}
            label="Preview"
            onClick={handlePreviewClick(id)} // Trigger preview
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
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
        marginLeft: '20px',
        backgroundColor: 'cyon',
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

      {/* Display preview details of the selected user */}
      {previewRow && (
        <Box sx={{ padding: 2, marginTop: 2, backgroundColor: 'cyon', borderRadius: '8px' }}>
          <h3>Preview User Details</h3>
          <img
            src={previewRow.photo}
            alt="User Preview"
            style={{ width: 100, height: 100, borderRadius: '50%' }}
          />
          <p><strong>Name:</strong> {previewRow.name}</p>
          <p><strong>Email:</strong> {previewRow.email}</p>
          <p><strong>Role:</strong> {previewRow.role}</p>
          <p><strong>Status:</strong> {previewRow.status}</p>
          <p><strong>Age:</strong> {previewRow.age}</p>
        </Box>
      )}
    </Box>
  );
}

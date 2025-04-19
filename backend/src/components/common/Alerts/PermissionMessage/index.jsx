import React from 'react';
import Swal from 'sweetalert2';



const PermissionMessage = () => {
  const swalWithTailwindButtons = Swal.mixin({
    customClass: {
      confirmButton: 'px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none',
      cancelButton: 'px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none'
    },
    buttonsStyling: false // must be false to apply customClass
  });

  swalWithTailwindButtons.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithTailwindButtons.fire({
        title: 'Deleted!',
        text: 'Your file has been deleted.',
        icon: 'success'
      });
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      swalWithTailwindButtons.fire({
        title: 'Cancelled',
        text: 'Your imaginary file is safe :)',
        icon: 'error'
      });
    }
  });

  return null;
};

export default PermissionMessage;

import React from 'react'
import Swal from 'sweetalert2';


const ErrorMessage = () => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });

  return (
    Swal
  )
}

export default ErrorMessage
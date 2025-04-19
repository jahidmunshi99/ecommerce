import React from 'react'
import Swal from 'sweetalert2';

const SucessMessage = () => {
  Swal.fire({
    title: "Sucessfully!",
    icon: "success"
  });
  return (
    Swal
  )
}

export default SucessMessage
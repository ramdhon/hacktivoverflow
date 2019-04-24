import Swal from 'sweetalert2';

export default {
  success(message) {
    return Swal.fire({
      position: 'center',
      type: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1500,
    });
  },
  fail(message) {
    return Swal.fire({
      position: 'center',
      type: 'error',
      title: message,
      showConfirmButton: false,
      timer: 1500,
    });
  },
};

import $ from "jquery";
import Swal from "sweetalert2";



$('.confirm').click(function () {
  if ($(this).closest('.remodal').find('.callback input[name="Имя"]' || '.callback input[name="Номер телефона"]').val() != '') {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
    });
    Toast.fire({
      type: 'success',
      title: 'Заявка принята'
    });
  } else {
    Swal.fire({
      type: 'error',
      title: 'Oops...',
      text: 'Заполните все поля!',
    })
  }
});
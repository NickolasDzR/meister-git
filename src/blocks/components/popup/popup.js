import $ from "jquery";
import Swal from "sweetalert2";



$('.confirm').click(function () {
  if ($(this).closest('.remodal').find('.callback input[name="Имя"]' && '.callback input[name="Номер телефона"]').val() != '') {
    Swal.fire(
      'Заявка отправленна!',
      'Мы вам скоро перезвоним',
      'success'
    )
  } else {
    Swal.fire({
      type: 'error',
      title: 'Оой...',
      text: 'Заполните все поля!',
    })
    $('.swal2-actions button').on('click', function() {
      $('.btn-wrapper a')[0].click();
  });
  }
});
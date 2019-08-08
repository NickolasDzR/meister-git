import $ from "jquery";
import Swal from "sweetalert2";

$('.popup-btn').click(function () {
  event.preventDefault();
  $('.remodal').addClass('remodal-is-active');
  $('.overlay-wrapper').addClass('overlay');
});

$('#popup-btn').click(function () {
  event.preventDefault();
  $('.remodal').removeClass('remodal-is-active');
  $('.overlay-wrapper').removeClass('overlay');
});

$('.remodal-close').click(function () {
  event.preventDefault();
  $('.remodal').removeClass('remodal-is-active');
  $('.overlay-wrapper').removeClass('overlay');
});

$('#popup-btn').click(function () {
  if ($(this).closest('.remodal').find('.callback input[name="Имя"]').val() === '') {
    Swal.fire({
      type: 'error',
      title: 'Оой...',
      text: 'Заполните все поля!',
    });
    $('.swal2-actions button').on('click', function () {
      $('.header_contacts a')[0].click();
    });
  } else if ($(this).closest('.remodal').find('.callback input[name="Телефон"]').val() === '') {
    Swal.fire({
      type: 'error',
      title: 'Оой...',
      text: 'Заполните все поля!',
    });
    $('.swal2-actions button').on('click', function () {
      $('.header_contacts a')[0].click();
    });
  } else {
    Swal.fire(
      'Заявка отправленна!',
      'Мы вам скоро перезвоним',
      'success'
    )
    $('.overlay-wrapper').removeClass('overlay');
  }
});
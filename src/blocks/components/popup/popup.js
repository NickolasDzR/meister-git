import $ from "jquery";
import Swal from "sweetalert2";

$('.popup-btn').click(function () {
  event.preventDefault();
  if (!$('.remodal').hasClass('remodal-is-active')) {
    $('.remodal').addClass('remodal-is-active');
    $('body').css('padding-right', '17px');
    $('#overlay').css('display', 'block');
    $('body').css('overflow', 'hidden');
  }
});

$('.remodal-close').click(function () {
  event.preventDefault();
  $('.remodal').removeClass('remodal-is-active');
  $('body').css('overflow', '');
  $('body').css('padding-right', '');
  $('#overlay').css('display', '');
});

$('#popup-btn').click(function () {
  event.preventDefault();
  $('.remodal').removeClass('remodal-is-active');
  $('body').css('overflow', '');
  $('body').css('padding-right', '');
  $('#overlay').css('display', '');
});

$('#overlay').click(function ()  {
  $('.remodal').removeClass('remodal-is-active');
    $('body').css('overflow', '');
    $('body').css('padding-right', '');
    $('#overlay').css('display', '');
});

// $('.popup-btn').click(function () {
//   $('#overlay').css('display', 'block');
// });

// $('#overlay').click(function () {
//   $('#overlay').css('display', '');
//   $('body').css('padding-right', '');
//   $('body').css('overflow', 'hidden');
//   $('.remodal').removeClass('remodal-is-active');
// });

$('#popup-btn').click('submit', function () {
  if ($(this).closest('.remodal').find('.callback input[name="Имя"]').val() === '') {
    Swal.fire({
      type: 'error',
      title: 'Оой...',
      text: 'Заполните все поля!',
    });
    $('.swal2-actions button').on('click', function () {
      $('.header_contacts a')[0].click();
      $('.overlay-wrapper').removeClass('overlay');
    });
  } else if ($(this).closest('.remodal').find('.callback input[name="Телефон"]').val() === '') {
    Swal.fire({
      type: 'error',
      title: 'Оой...',
      text: 'Заполните все поля!',
    });
    $('.overlay-wrapper').removeClass('overlay');
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
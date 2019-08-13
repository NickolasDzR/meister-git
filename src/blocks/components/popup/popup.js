import $ from "jquery";
import Swal from "sweetalert2";


$(function () {
  $('.popup-btn').click('submit', function () {
    if (!$('.remodal').hasClass('remodal-is-active')) {
      $('.remodal').addClass('remodal-is-active');
      $('body').css('padding-right', '17px');
      $('#overlay').css('display', 'block');
      $('body').css('overflow', 'hidden');
    }
  });

$(document).mouseup(function(e) {
  var container = $(".callback-wrapper");
  if (container.has(e.target).length === 0) {
    $('.remodal').removeClass('remodal-is-active');
    $('body').css('overflow', '');
    $('body').css('padding-right', '');
    $('#overlay').css('display', '');
  }
});

  $('.remodal-close').click(function () {
    $('.remodal').removeClass('remodal-is-active');
    $('body').css('overflow', '');
    $('body').css('padding-right', '');
    $('#overlay').css('display', '');
  });

  $('.callback-wrapper button').click(function () {
    $('.remodal').removeClass('remodal-is-active');
    $('body').css('overflow', '');
    $('body').css('padding-right', '');
    $('#overlay').css('display', '');
  });

  $('.callback-wrapper button').click('submit', function () {
    if ($(this).closest('.remodal').find('.callback input[name="Имя"]').val() === '') {
      Swal.fire({
        type: 'error',
        title: 'Оой...',
        text: 'Заполните все поля!',
      });
      $('.swal2-actions button').on('click', function () {
        $('.header_contacts a')[0].click();
        $('#overlay').css('display', 'block');
      });
    } else if ($(this).closest('.remodal').find('.callback input[name="Телефон"]').val() === '') {
      Swal.fire({
        type: 'error',
        title: 'Оой...',
        text: 'Заполните все поля!',
      });
      $('#overlay').css('display', 'block');
      $('.swal2-actions button').on('click', function () {
        $('.header_contacts a')[0].click();
      });
    } else {
      Swal.fire(
        'Заявка отправленна!',
        'Мы вам скоро перезвоним',
        'success'
      )
      $('#overlay').css('display', '');
    }
  });
});
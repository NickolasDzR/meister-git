import $ from "jquery";
import Swal from "sweetalert2";

$(function () {

    // In this case the initialization function returns the already created instance
    $('[data-remodal-id=modal2]').remodal({
        modifier: 'with-red-theme'
    });
});

$('.confirm').click(function(){ 
    if($(this).closest('.remodal').find('.callback input[name="Имя"]').val() != ''){ 
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            scrollbarPadding: false,
            timer: 3000
          });
          
          Swal.fire(
            'Спасибо за заявку!',
            'Мы Вам скоро перезвоним',
            'success'
          )
    } else { 
      console.log('пусто')
    }; 
  }); 

// $(function() {
//     $('.confirm').click(function(){
//         if( $(input).val().length == 0 ) {
//             Swal.fire({
//                 position: 'top-end',
//                 type: 'success',
//                 title: 'Your work has been saved',
//                 showConfirmButton: false,
//                 timer: 1500
//               });
//         }
//     });
// });

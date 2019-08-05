import $ from "jquery";

$(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        items: 1,
        dots: false,
        nav: true,
        navText: ['<i class="icon icofont-ui-next"</i>','<i class="icon icofont-ui-previous"</i>'],
        smartSpeed: 1100,
    });
  });
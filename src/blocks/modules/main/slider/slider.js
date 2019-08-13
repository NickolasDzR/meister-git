import $ from "jquery";

$(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        items: 1,
        dots: false,
        nav: true,
        navText: ['<i class="icon icofont-rounded-right"</i>','<i class="icon icofont-rounded-left"</i>'],
        smartSpeed: 1100,
    });
  });
import $ from "jquery";

$(function(){
    $('.hamburger').on('click', function(){
        $('#my-menu').toggleClass('nav-active'),
        $('.hamburger').toggleClass('is-active');
        });

});
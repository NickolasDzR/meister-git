import $ from "jquery";

$(function () {
    var $window = $(window),
        $ya = $('ymaps');

    function resize() {
        if ($window.width() < 576) {
            return $ya.css('height', '371px;');
        }

        $ya.removeClass('mobile');
    }

    $window
        .resize(resize)
        .trigger('resize');
})
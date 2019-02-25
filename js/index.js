var link = document.querySelector(".call-button");
var popup = document.querySelector(".form-unshow");
var close_button = document.querySelector(".popup-close");
var input_name = popup.querySelector("[name=name]");
var input_number = popup.querySelector("[name=number]");
var form = popup.querySelector(".popup-form");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("form-show");
  input_name.focus();
  popup.classList.remove("form-unshow");
  console.log("включаем popup добавляя form-show и удаляя form-unshow");
});

close_button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("form-show");
  popup.classList.remove("modal-error");
  popup.classList.add("form-unshow");
  console.log("выключаем popup добавляя form-unshow и удаляя form-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("form-show")) {
      evt.preventDefault();
      popup.classList.remove("form-show");
      popup.classList.remove("modal-error");
      popup.classList.add("form-unshow");
    }
  }
});

form.addEventListener("submit", function (evt) {
  if (!input_name.value || !input_number.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    console.log("Нужно ввести пароль");
  }
});

/* vacancy popup on the vacancy page */

/* two forms on the main, vacancy and about-us page */
var form_main_page = document.querySelector(".form-main-page");
var main_order_form = document.querySelector(".main-order-form");
var main_order_form = document.querySelector(".main-order-form");
var name_company = main_order_form.querySelector("[name=name_company]");
var telephone_email = main_order_form.querySelector("[name=telephone_email]");
var point_send = main_order_form.querySelector("[name=point_send]");
var point_get = main_order_form.querySelector("[name=point_get]");
var load_weight = main_order_form.querySelector("[name=load_weight]");

main_order_form.addEventListener("submit", function (evt) {
  if (!name_company.value || !telephone_email.value || !point_send.value || !point_get.value || !load_weight.value) {
    evt.preventDefault();
    form_main_page.classList.remove("modal-error");
    form_main_page.offsetWidth = popup.offsetWidth;
    form_main_page.classList.add("modal-error");
    console.log("Форма подачи заявки на перевозку груза");
  }
});

/* redstar */
var input = document.querySelectorAll("input");
var redstar = document.querySelector(".redstar");

document.getElementById('input').addEventListener('keydown', function(evt) { 
    evt.preventDefault();
    redstar.classList.remove("redstar");
 });

 /*
  document.getElementById('myinput').addEventListener('keydown', function(evt) {
  evt.preventDefault();
  popup.classList.add("form-show");
  input_name.focus();
  popup.classList.remove("form-unshow");
  console.log("включаем popup добавляя form-show и удаляя form-unshow");
});
*/
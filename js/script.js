var link = document.querySelector(".call-button");
var popup = document.querySelector(".form-unshow");
var close = document.querySelector(".popup-close");
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

close.addEventListener("click", function (evt) {
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

/* two forms on the main and vacancy page */

var button = document.querySelector(".button-main-form");
var form_main_page = document.querySelector(".form-main-page");
var main_order_form = document.querySelector(".main-order-form");
var input_company = main_order_form.querySelector("[name=company]");
var input_your_point = main_order_form.querySelector("[name=your-point]");
var input_cargo_weight = main_order_form.querySelector("[name=cargo-weight]");
var input_phone_email = main_order_form.querySelector("[name=phone-email]");
var input_destination_point = main_order_form.querySelector("[name=destination-point]");
var input_comment = main_order_form.querySelector("[name=comment]");

main_order_form.addEventListener("submit", function (evt) {
  if (!input_company.value || !input_your_point.value || !input_cargo_weight.value || !input_phone_email.value || !input_destination_point.value || !input_comment) {
    evt.preventDefault();
    form_main_page.classList.remove("modal-error");
    form_main_page.offsetWidth = popup.offsetWidth;
    form_main_page.classList.add("modal-error");
    console.log("Форма подачи заявки на перевозку груза");
  }
});

/* two forms on the main and vacancy page */
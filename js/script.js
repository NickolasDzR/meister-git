var link = document.querySelector(".call-button");
var popup = document.querySelector(".form-unshow");
var close = document.querySelector(".popup-close");
var input_name = popup.querySelector("[name=name]");
var input_number = popup.querySelector("[name=number]");
var form = popup.querySelector(".popup-form");

var form_request = document.querySelector(".col-7-fm");
var order_form = form_request.querySelector(".order-form");
var input_company = form_request.querySelector("[name=company]");
var input_your_point = form_request.querySelector("[name=your-point]");
var input_cargo_weight = form_request.querySelector("[name=cargo-weight]");
var input_phone_email = form_request.querySelector("[name=phone-email]");
var input_destination_point = form_request.querySelector("[name=destination-point]");
var input_comment = form_request.querySelector("[name=comment]");

order_form.addEventListener("submit", function (evt) {
  if (!input_company.value || !input_your_point.value || !input_cargo_weight.value || !input_phone_email.value || !input_destination_point.value || !input_comment) {
    evt.preventDefault();
    form_request.classList.remove("modal-error");
    form_request.offsetWidth = popup.offsetWidth;
    form_request.classList.add("modal-error");
    console.log("Нужно ввести пароль");
  }
});

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

form.addEventListener("submit", function (evt) {
  if (!input_name.value || !input_number.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    console.log("Нужно ввести пароль");
  }
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
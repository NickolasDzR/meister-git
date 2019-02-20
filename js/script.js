var link = document.querySelector(".call-button");
var button_logist = document.querySelector(".respond-logist");
var button_driver = document.querySelector(".respond-driver");
var popup = document.querySelector(".form-unshow");
var close = document.querySelector(".popup-close");
var input_name = popup.querySelector("[name=name]");
var input_number = popup.querySelector("[name=number]");
var form = popup.querySelector(".popup-form");
var form_request = document.querySelector(".col-7-fm");
var order_form = form_request.querySelector(".order-form");

/* var for not valued inputs */
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

/* code for popup vacancy */

var logist = document.querySelector(".popup-logist");
var driver = document.querySelector(".popup-driver");
var off_logist = document.querySelector(".popup-logist-off");
var off_driver = document.querySelector(".popup-driver-off");
var input_name = logist.querySelector("[name=your-nick]");
var input_number = logist.querySelector("[name=your-contants]");
var input_name = driver.querySelector("[name=your-nick]");
var input_number = driver.querySelector("[name=your-contants]");

button_logist.addEventListener("click", function (evt) {
  evt.preventDefault();
  logist.classList.add("form-show");
  input_name.focus();
  logist.classList.remove("form-unshow");
  console.log("включаем popup добавляя form-show и удаляя form-unshow");
});

off_logist.addEventListener("click", function (evt) {
  evt.preventDefault();
  logist.classList.remove("form-show");
  logist.classList.add("form-unshow");
  console.log("выключаем попап с вакансией логиста");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (logist.classList.contains("form-show")) {
      evt.preventDefault();
      logist.classList.remove("form-show");
      logist.classList.add("form-unshow");
    }
  }
});

order_form.addEventListener("submit", function (evt) {
  if (!your-nick.value || !your-contants.value) {
    evt.preventDefault();
    logist.classList.remove("modal-error");
    logist.offsetWidth = popup.offsetWidth;
    logist.classList.add("modal-error");
    console.log("Нужны правельные данные");
  }
});

button_driver.addEventListener("click", function (evt) {
  evt.preventDefault();
  driver.classList.add("form-show");
  input_name.focus();
  driver.classList.remove("form-unshow");
  console.log("включаем popup добавляя form-show и удаляя form-unshow");
});

off_driver.addEventListener("click", function (evt) {
  evt.preventDefault();
  driver.classList.remove("form-show");
  driver.classList.add("form-unshow");
  console.log("выключаем попап с вакансией водителя");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (driver.classList.contains("form-show")) {
      evt.preventDefault();
      driver.classList.remove("form-show");
      driver.classList.add("form-unshow");
    }
  }
});
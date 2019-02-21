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

/* two forms on the main, vacancy and about-us page */

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
/* two forms on the main, vacancy and about-us page */

/* vacancy popup on the vacancy page */

var respond_logist = document.querySelector(".respond-logist");
var button_logist = document.querySelector(".button-logist");
var logist_form = document.querySelector(".form-logist");
var logist_page = document.querySelector(".form-unshow-logist");
var close_logist = document.querySelector(".close-logist");
var name_logist = logist_form.querySelector("[name=name-logist]");
var name_logist = logist_form.querySelector("[name=number-logist]");


respond_logist.addEventListener("click", function (evt) {
  evt.preventDefault();
  logist_page.classList.add("form-show-logist");
  name_logist.focus(1);
  logist_page.classList.remove("form-unshow-logist");
  console.log("логист форма");
});

close_logist.addEventListener("click", function (evt) {
  evt.preventDefault();
  logist_page.classList.remove("form-show-logist");
  popup.classList.remove("modal-error");
  logist_page.classList.add("form-unshow-logist");
  console.log("выключаем popup");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (logist_page.classList.contains("form-show-logist")) {
      evt.preventDefault();
      logist_page.classList.remove("form-show-logist");
      logist_page.classList.remove("modal-error");
      logist_page.classList.add("form-unshow-logist");
    }
  }
});

logist_form.addEventListener("submit", function (evt) {
  if (!name_logist.value || !number_logist.value) {
    evt.preventDefault();
    logist_page.classList.remove("modal-error");
    logist_page.offsetWidth = popup.offsetWidth;
    logist_page.classList.add("modal-error");
    console.log("Нужны данные");
  }
});

/* vacancy popup on the vacancy page */
/* driver popup on the vacancy page */
var respond_driver = document.querySelector(".respond-driver");
var driver_page = document.querySelector(".form-unshow-driver");
var close_driver = document.querySelector(".close-driver");
var driver_form = document.querySelector(".form-driver");
var name_driver = driver_form.querySelector("[name=name-driver]");
var name_driver = driver_form.querySelector("[name=number-driver]");

respond_driver.addEventListener("click", function(evt) {
  evt.preventDefault();
  driver_page.classList.remove("form-unshow-driver");
  name_driver.focus();
  driver_page.classList.add("form-show-driver");
  console.log("логист форма");
});

close_driver.addEventListener("click", function(evt) {
  evt.preventDefault();
  driver_page.classList.add("form-unshow-driver");
  driver_page.classList.remove("modal-error");
  driver_page.classList.remove("form-show-driver");
  console.log("Форма закрывается");
});

driver_form.addEventListener("submit", function (evt) {
  if (!name_driver.value || !number_driver.value) {
    evt.preventDefault();
    driver_page.classList.remove("modal-error");
    driver_page.offsetWidth = popup.offsetWidth;
    driver_page.classList.add("modal-error");
    console.log("Нужны данные");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (driver_page.classList.contains("form-show-driver")) {
      evt.preventDefault();
      driver_page.classList.remove("form-show-driver");
      driver_page.classList.remove("modal-error");
      driver_page.classList.add("form-unshow-driver");
    }
  }
});
/* driver popup on the vacancy page */
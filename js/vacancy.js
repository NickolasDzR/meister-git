
var link = document.querySelector(".call-button");
var popup = document.querySelector(".form-unshow");
var close_button = document.querySelector(".popup-close");
var overlay = document.querySelector(".overlay");
var input_name = popup.querySelector("[name=name]");
var input_number = popup.querySelector("[name=number]");
var form = popup.querySelector(".popup-form");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("form-show");
  overlay.classList.add("form-show");
  input_name.focus();
  popup.classList.remove("form-unshow");
  overlay.classList.remove("form-unshow");
  console.log("включаем popup добавляя form-show и удаляя form-unshow");
});

close_button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("form-show");
  overlay.classList.remove("form-show");
  popup.classList.remove("modal-error");
  popup.classList.add("form-unshow");
  overlay.classList.add("form-unshow");
  console.log("выключаем popup добавляя form-unshow и удаляя form-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("form-show")) {
      evt.preventDefault();
      popup.classList.remove("form-show");
      overlay.classList.remove("form-show");
      popup.classList.remove("modal-error");
      popup.classList.add("form-unshow");
      overlay.classList.add("form-unshow");
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
var respond_logist = document.querySelector(".respond-logist");
var button_logist = document.querySelector(".button-logist");
var logist_form = document.querySelector(".form-logist");
var logist_page = document.querySelector(".form-unshow-logist");
var close_logist = document.querySelector(".close-logist");
var name_logist = logist_form.querySelector("[name=name_logist]");
var number_logist = logist_form.querySelector("[name=number_logist]");

respond_logist.addEventListener("click", function (evt) {
  evt.preventDefault();
  logist_page.classList.add("form-show-logist");
  overlay.classList.add("form-show");
  logist_page.classList.remove("form-unshow-logist");
  overlay.classList.remove("form-unshow");
  console.log("логист форма");
});

close_logist.addEventListener("click", function (evt) {
  evt.preventDefault();
  logist_page.classList.remove("form-show-logist");
  overlay.classList.remove("form-show");
  popup.classList.remove("modal-error");
  logist_page.classList.add("form-unshow-logist");
  overlay.classList.add("form-unshow");
  console.log("выключаем popup");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (logist_page.classList.contains("form-show-logist")) {
      evt.preventDefault();
      logist_page.classList.remove("form-show-logist");
      overlay.classList.remove("form-show");
      logist_page.classList.remove("modal-error");
      logist_page.classList.add("form-unshow-logist");
      overlay.classList.add("form-unshow");
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
var name_driver = driver_form.querySelector("[name=name_driver]");
var number_driver = driver_form.querySelector("[name=number_driver]");

respond_driver.addEventListener("click", function(evt) {
  evt.preventDefault();
  driver_page.classList.remove("form-unshow-driver");
  overlay.classList.remove("form-unshow");
  driver_page.classList.add("form-show-driver");
  overlay.classList.add("form-show");
  console.log("логист форма");
});

close_driver.addEventListener("click", function(evt) {
  evt.preventDefault();
  driver_page.classList.add("form-unshow-driver");
  overlay.classList.remove("form-show");
  driver_page.classList.remove("modal-error");
  overlay.classList.add("form-unshow");
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
      overlay.classList.remove("form-show");
      driver_page.classList.remove("modal-error");
      driver_page.classList.add("form-unshow-driver");
      overlay.classList.add("form-unshow");
    }
  }
});

var vacancy_button = document.querySelector(".vacancy_button");
var vacancy_form = document.querySelector(".vacancy_form");
var vacancy_form_page = document.querySelector(".vacancy_form_page");
var vacancy_name = vacancy_form.querySelector("[name=vacancy_name]");
var vacancy_email = vacancy_form.querySelector("[name=vacancy_email]");
var vacancy_inp = vacancy_form.querySelector("[name=vacancy_inp]");

vacancy_form.addEventListener("submit", function (evt) {
  if (!vacancy_name.value || !vacancy_email.value || !vacancy_inp.value) {
    evt.preventDefault();
    vacancy_form_page.classList.remove("modal-error");
    vacancy_form_page.offsetWidth = popup.offsetWidth;
    vacancy_form_page.classList.add("modal-error");
    console.log("Нужны данные");
  }
});
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

/* about-us form */
var abous_us_page = document.querySelector(".abous_us_page");
var about_us_form = document.querySelector(".about_us_form");
var about_us_name = about_us_form.querySelector("[name=about_us_name]");
var about_us_email = about_us_form.querySelector("[name=about_us_email]");
var about_us_question = about_us_form.querySelector("[name=about_us_question]");

about_us_form.addEventListener("submit", function (evt) {
  if (!about_us_name.value || !about_us_email.value || !about_us_question.value) {
    evt.preventDefault();
    abous_us_page.classList.remove("modal-error");
    abous_us_page.offsetWidth = popup.offsetWidth;
    abous_us_page.classList.add("modal-error");
    console.log("Форма подачи заявки на перевозку груза");
  }
});
/* about-us form */
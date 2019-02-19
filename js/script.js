var link = document.querySelector(".call-button");
var popup = document.querySelector(".form-unshow");
var close = document.querySelector(".popup-close");
var input_name = popup.querySelector("[name=name]");
var input_number = popup.querySelector("[name=number]");

var form = popup.querySelector("form");

link.addEventListener( "click", function(evt){
  evt.preventDefault();
popup.classList.add("form-show");
input_name.focus();
popup.classList.remove("form-unshow");
  console.log("включаем popup добавляя form-show и удаляя form-unshow");
});

close.addEventListener( "click", function(evt){
  evt.preventDefault();
  popup.classList.remove("form-show");
  popup.classList.remove("modal-error");
  popup.classList.add("form-unshow");
    console.log("выключаем popup добавляя form-unshow и удаляя form-show");
});

form.addEventListener("submit", function(evt) {
  if (!input_name.value || !input_number.value) {
  evt.preventDefault();
  popup.classList.remove("modal-error");
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add("modal-error");
  console.log("Нужно ввести пароль");
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27 ){
    if (popup.classList.contains("form-show")) {
      evt.preventDefault();
      popup.classList.remove("form-show");
      popup.classList.remove("modal-error");
      popup.classList.add("form-unshow");
    }
  }
});
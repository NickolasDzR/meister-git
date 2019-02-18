var link = document.querySelector(".call-button");
var popup = document.querySelector(".form-unshow");
var close = document.querySelector(".popup-close")

link.addEventListener( "click", function(evt){
  evt.preventDefault();
popup.classList.add("form-show");
popup.classList.remove("form-unshow");
});

link.addEventListener( "click", function(evt){
  evt.preventDefault();
    console.log("отменяем стандартные действия ссылки по нажатию на нее");
});

close.addEventListener( "click", function(evt){
  evt.preventDefault();
  popup.classList.remove("form-show");
  popup.classList.add("form-unshow");
    console.log("выключаем popup добавляя form-unshow и удаляя form-show");
});
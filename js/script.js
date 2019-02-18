var link = document.querySelector(".call-button");
var popup = document.querySelector(".form-unshow");
var close = document.querySelector(".popup-close")

link.addEventListener( "click", function(evt){
  evt.preventDefault();
popup.classList.add("form-show");
popup.classList.remove("form-unshow");
  console.log("включаем popup добавляя form-show и удаляя form-unshow");
});

close.addEventListener( "click", function(evt){
  evt.preventDefault();
  popup.classList.remove("form-show");
  popup.classList.add("form-unshow");
    console.log("выключаем popup добавляя form-unshow и удаляя form-show");
});
function alert_name() {
  //Create name variable
  var name = " Nora uwu";
  alert("My name is" +  name);
  console.log("uwu");
}

function change_image() {
  var image = document.getElementById('cat');
  image.src = "img/dab1.png";
  object.onmouseover = function(){myScript};
}

function bigImg(x) {
  x.style.height = "500px";
  x.style.width = "500px";

}

function normalImg(x) {
  x.style.height = "50px";
  x.style.width = "50px";
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

var slideIndex = 1;

document.getElementById("btnRight").addEventListener("click", () => plusSlides(1));
document.getElementById("btnLeft").addEventListener("click", () => plusSlides(-1));

function plusSlides(n) {
  showSlides(slideIndex += n);
}

showSlides(slideIndex);

function showSlides(n) {
  var slides = document.getElementsByClassName("header__slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

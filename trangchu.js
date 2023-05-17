

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Chuyển đổi slide mỗi 3 giây
}

function currentSlide(n) {
  slideIndex = n;
  showSlides();
}

function plusSlides(n) {
  slideIndex += n;
  showSlides();
} 
window.addEventListener("load", () => {
  showSlides(slideIndex);
});
let currentSlideIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll('.carousel-slide');
  
  // Remove active status from current slide
  slides[currentSlideIndex].classList.remove('active');
  
  // Calculate new index
  currentSlideIndex += direction;
  
  // Loop back around if user goes past the ends
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  } else if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }
  
  // Add active status to new slide
  slides[currentSlideIndex].classList.add('active');
}

const scrollPosition = window.pageYOffset;
  // Adjust the 0.3 multiplier to control parallax speed
  document.body.style.backgroundPositionY = -(scrollPosition * 0.3) + 'px';

window.addEventListener('scroll', function() {
  const scrollPosition = window.pageYOffset;
  // Adjust the 0.3 multiplier to control parallax speed
  document.body.style.backgroundPositionY = -(scrollPosition * 0.3) + 'px';
});
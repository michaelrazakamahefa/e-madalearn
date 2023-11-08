document.addEventListener('DOMContentLoaded', function() {
    // Code pour le carousel (inclus ici pour référence)
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
  
    function showSlide(slideIndex) {
      if (slideIndex < 0) {
        currentSlide = totalSlides - 1;
      } else if (slideIndex >= totalSlides) {
        currentSlide = 0;
      } else {
        currentSlide = slideIndex;
      }
  
      slides.forEach(function(slide) {
        slide.classList.remove('active');
      });
  
      slides[currentSlide].classList.add('active');
    }
  
    function nextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function prevSlide() {
      showSlide(currentSlide - 1);
    }
  
    document.querySelector('.arrow-left').addEventListener('click', prevSlide);
    document.querySelector('.arrow-right').addEventListener('click', nextSlide);
  
    setInterval(nextSlide, 5000); // Change de diapositive toutes les 5 secondes
  
    // Code pour le slide down (inclus ici pour référence)
    const platformTitle = document.getElementById('platform-title');
  
    function activateSlideDown() {
      platformTitle.classList.add('active');
    }
  
    window.addEventListener('load', function() {
      activateSlideDown();
    });
  
    // Code pour le slide right et left
    const buttons = document.querySelectorAll('.slide-right, .slide-left');
  
    buttons.forEach(button => {
      const buttonPosition = button.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
  
      if (buttonPosition < screenPosition) {
        button.classList.add('active');
      }
    });
  });
  
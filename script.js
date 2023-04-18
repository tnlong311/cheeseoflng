window.addEventListener('load', function() {
    var sliderContainer = document.querySelector('.slider-container');
    var slider = sliderContainer.querySelector('.slider');
    var slides = slider.querySelectorAll('.slide');
    var sliderButtons = sliderContainer.querySelectorAll('.slider-button');
  
    // Set the initial slide and button states
    var currentSlideIndex = 0;
    showSlide(currentSlideIndex);
    highlightButton(currentSlideIndex);
  
    // Add click event listeners to the buttons
    for (var i = 0; i < sliderButtons.length; i++) {
      sliderButtons[i].addEventListener('click', function() {
        var slideIndex = parseInt(this.getAttribute('data-slide'));
        showSlide(slideIndex);
        highlightButton(slideIndex);
      });
    }
  
    // Show the specified slide
    function showSlide(index) {
      // Hide all the slides except the current one
      for (var i = 0; i < slides.length; i++) {
        if (i === index) {
          slides[i].style.display = 'block';
        } else {
          slides[i].style.display = 'none';
        }
      }
      currentSlideIndex = index;
    }
  
    // Highlight the specified button
    function highlightButton(index) {
      // Remove the active class from all buttons except the current one
      for (var i = 0; i < sliderButtons.length; i++) {
        if (i === index) {
          sliderButtons[i].classList.add('active');
        } else {
          sliderButtons[i].classList.remove('active');
        }
      }
    }
  });
function validateContactForm() {
  let contactForm = document.forms["contactForm"];
  let fname = contactForm["fname"].value;
  let lname = contactForm["lname"].value;
  let age = contactForm["age"].value;
  let mobile = contactForm["mobile"].value;
  let address = contactForm["address"].value;

  let numberRegex = /^\d+$/;
  let vnPhoneRegex = /(84|0[1-9])+([0-9]{7,11})\b/;

  let check = true;

  if (fname == "") {
    document.getElementById("fname-error").innerHTML = "Please enter first name!";
    document.getElementById("fname-error").style.display = "block";
    check = false;
  } else {
    document.getElementById("fname-error").style.display = "none";
  }

  if (lname == "") {
    document.getElementById("lname-error").innerHTML = "Please enter last name!";
    document.getElementById("lname-error").style.display = "block";
    check = false;
  } else {
    document.getElementById("lname-error").style.display = "none";
  }

  if (age == "") {
    document.getElementById("age-error").innerHTML = "Please enter age!";
    document.getElementById("age-error").style.display = "block";
    check = false;
  } else if (!numberRegex.test(age) || age <= 0 || age > 200) {
    document.getElementById("age-error").innerHTML = "Please enter a valid age!";
    document.getElementById("age-error").style.display = "block";
    check = false;
  } else {
    document.getElementById("age-error").style.display = "none";
  }

  if (mobile == "") {
    document.getElementById("mobile-error").innerHTML = "Please enter mobile number!";
    document.getElementById("mobile-error").style.display = "block";
    check = false;
  } else if (!vnPhoneRegex.test(mobile)) {
    document.getElementById("mobile-error").innerHTML = "Please enter a valid number!";
    document.getElementById("mobile-error").style.display = "block";
    check = false;
  } else {
    document.getElementById("mobile-error").style.display = "none";
  }

  if (address == "") {
    document.getElementById("address-error").innerHTML = "Please enter address!";
    document.getElementById("address-error").style.display = "block";
    check = false;
  } else {
    document.getElementById("address-error").style.display = "none";
  }

  if (check) {
    if (confirm("Are you sure you want to submit the form?") == true) {
      alert("Form submitted!");
    }  
  }
}

function resetContactForm() {
  if (confirm("Are you sure you want to reset the form?") == true) {
    document.forms["contactForm"].reset();
  }  
}

window.addEventListener('load', function() {
    var sliderContainer = document.querySelector('.body-container');
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

let slideIndex = 0;
showSlides();

// automatically change slides
function showSlides() {
  let i;
  let sliderContainer = document.querySelector('.body-container');
  let slider = sliderContainer.querySelector('.slider');
  let slides = slider.querySelectorAll('.slide');

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {slideIndex = 1}

  slides[slideIndex-1].style.display = "block";

  setTimeout(showSlides, 4000); // Change image every 4 seconds
}
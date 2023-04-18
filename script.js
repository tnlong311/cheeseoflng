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
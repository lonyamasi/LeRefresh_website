

//Function to toggle the side navigation menu
const menuBtn = document.getElementById("menuBtn");
const sideNav = document.getElementById("sideNav");
const menu = document.getElementById("menu");

sideNav.style.right = "-250px";

menuBtn.onclick = function() {
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
        menu.src = "images/close.png";
       
    } else {
        sideNav.style.right = "-250px";
        menu.src = "images/menu.png";
    }
}

// Function to toggle the theme
const icon = document.getElementById("icon");
icon.onclick = function() {
    document.body.classList.toggle("theme2");
    if (document.body.classList.contains("theme2")) {
        icon.src = "images/sun.png";
    }else {
        icon.src = "images/moon.png";
    }
};

// Theme toggle button logic
icon.onclick = function () {
    document.body.classList.toggle("theme2");

    if (document.body.classList.contains("theme2")) {
        icon.src = "images/sun.png";
        localStorage.setItem("theme", "theme2");
    } else {
        icon.src = "images/moon.png";
        localStorage.setItem("theme", "light");
    }
};

// Function to handle form submission
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual submission

    // Get input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!name || !email) {
      formMessage.style.color = 'red';
      formMessage.textContent = 'Please fill in all required fields.';
      return;
    }

    // Optionally, send form data via fetch() to your server here

    formMessage.style.color = 'green';
    formMessage.textContent = 'Thank you! Your message has been sent.';

    // Clear form
    form.reset();
  });
"use strict";

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var goTopBtn = document.getElementById("goTopBtn");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goTopBtn.style.display = "block";
  } else {
    goTopBtn.style.display = "none";
  }
} // When the user clicks on the button, scroll to the top of the document


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
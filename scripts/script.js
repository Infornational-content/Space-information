// Get the button
let goTopBtn = document.getElementById("goTopBtn");

// When the user scrolls down 100px from the top, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    goTopBtn.style.display = "block";
  } else {
    goTopBtn.style.display = "none";
  }
}

// When the user clicks the button, scroll to the top of the document
goTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

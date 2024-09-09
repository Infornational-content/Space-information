document.addEventListener("DOMContentLoaded", function () {
  let goTopBtn = document.getElementById("goTopBtn");

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

  goTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

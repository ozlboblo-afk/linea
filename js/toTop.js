// toTop.js
document.addEventListener("DOMContentLoaded", () => {
  const toTopBtn = document.querySelector(".toTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      toTopBtn.classList.add("is-visible");
    } else {
      toTopBtn.classList.remove("is-visible");
    }
  });

  toTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

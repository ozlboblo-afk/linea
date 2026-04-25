const heroImg = document.querySelector(".workDetailHero img");
const thumbs = document.querySelectorAll(".thumbTrack img");

thumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    heroImg.src = thumb.src.replace("-thumb", "-hero");
  });
});

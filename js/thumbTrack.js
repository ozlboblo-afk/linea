document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".thumbTrack");
  const images = document.querySelectorAll(".thumbTrack img");
  const prevBtn = document.querySelector(".thumbPrev");
  const nextBtn = document.querySelector(".thumbNext");

  let index = 0;

  // サムネ1枚の幅（動的に取得）
  const getItemWidth = () => {
    const img = images[0];
    const style = window.getComputedStyle(img);
    const width = img.offsetWidth;
    const gap = parseFloat(style.marginRight) || 0;
    return width + gap;
  };

  const updateCarousel = () => {
    const itemWidth = getItemWidth();
    track.style.transform = `translateX(${-index * itemWidth}px)`;
  };

  // 次へ（ループ）
  nextBtn.addEventListener("click", () => {
    index = (index + 1) % images.length;
    updateCarousel();
  });

  // 前へ（ループ）
  prevBtn.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    updateCarousel();
  });

  // リサイズ時にも幅を再計算
  window.addEventListener("resize", updateCarousel);
});

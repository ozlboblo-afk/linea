const tabs = document.querySelectorAll(".worksTab");
const cards = document.querySelectorAll(".worksCard");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const filter = tab.dataset.filter;

    // タブの見た目切り替え
    tabs.forEach((t) => t.classList.remove("is-active"));
    tab.classList.add("is-active");

    // カードのフィルタリング
    cards.forEach((card) => {
      const tags = card.dataset.tags.split(" ");

      if (filter === "all" || tags.includes(filter)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
});

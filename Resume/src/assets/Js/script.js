const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    // eslint-disable-next-line no-undef
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        // eslint-disable-next-line no-undef
        addBackSection(j);
        // allSection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    // eslint-disable-next-line no-undef
    showSection(this);
    if (window.innerWidth < 1200) {
      // eslint-disable-next-line no-undef
      asideSectionTogglerBtn();
    }
  });
}

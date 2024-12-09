// Initiate the menu. When the hamburger icon is clicked, the nav-links class will be toggled.
document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("expanded");
});

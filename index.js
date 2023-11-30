const menuButton = document.getElementById("menu");
const hiddenMenuList = document.getElementById("hiddenMenuList");

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("active");
  hiddenMenuList.classList.toggle("active");
});

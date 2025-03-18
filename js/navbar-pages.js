function toggleSidenav() {
  document.body.classList.toggle("sidenav-active");
}
function closeSidenav() {
  document.body.classList.remove();
}
// const interval = setInterval(toggleSidenav, 1500);
document.addEventListener("mousemove", removeInterval);
document.addEventListener("click", removeInterval);

function removeInterval() {
  document.removeEventListener("mousemove", removeInterval);
  document.removeEventListener("click", removeInterval);
}
// //////////////////////////////////////////////////////////////////////////////////////
document.querySelectorAll(".btnServices").forEach((boxLink) => {
  const link = boxLink.querySelector(".link");
  if (!link) return;

  const targetId = link.getAttribute("data-target");
  const list = document.getElementById(targetId);

  if (!list) return;

  const showList = () => {
    list.style.display = "flex";
    list.classList.add("active");
  };

  const hideList = () => {
    list.classList.remove("active");
    list.addEventListener(
      "transitionend",
      () => {
        if (!list.classList.contains("active")) {
          list.style.display = "none";
        }
      },
      { once: true }
    );
  };

  boxLink.addEventListener("mouseenter", showList);
  boxLink.addEventListener("mouseleave", hideList);
});

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
  if (!link) return; // Ensure the link exists

  const targetId = link.getAttribute("data-target");
  const list = document.getElementById(targetId);

  if (!list) return; // Ensure the target list exists

  const showList = () => list.classList.add("active");
  const hideList = () => list.classList.remove("active");

  const showCoverBack = () => divCoverBack?.classList.add("coverBack");
  const hideCoverBack = () => divCoverBack?.classList.remove("coverBack");

  boxLink.addEventListener("mouseenter", () => {
    showList();
    showCoverBack();
  });

  boxLink.addEventListener("mouseleave", () => {
    hideList();
    hideCoverBack();
  });
});

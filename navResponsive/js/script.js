//Javascript file

function openMenu() {

  let el = document.getElementById("top-nav");
  let elIcon = document.getElementById("iconImage")
  if (el.className === "top-nav") {
    el.className += " open";
    elIcon.style.transform = "rotate(90deg)";
  }else {
    el.className = "top-nav";
    elIcon.style.transform = "rotate(0deg)";
  }
}



//FUNCTION TO OPEN SIDE MENU
function openMenu() {
  document.getElementById("side-menu").style.width = "250px";
  document.getElementById("main-content").style.marginLeft = "250px";
  document.getElementById("openMark").style.display = "none";
}

//FUNCTION TO CLOSE SIDE MENU
function closeMenu() {
  document.getElementById("side-menu").style.width = 0;
  document.getElementById("main-content").style.marginLeft = 0;
  document.getElementById("openMark").style.display = "block";
}


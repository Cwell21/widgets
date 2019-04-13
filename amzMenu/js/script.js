(function() {

  const btnMenu = document.getElementById("btnMenu");
  const mnuAside = document.getElementById("modalMenu");

  btnMenu.addEventListener("click", () => {
    mnuAside.style.left = 0;
  })

  btnClose.addEventListener("click", () => {
    mnuAside.style.left = -10000 + "px";
  })

}());
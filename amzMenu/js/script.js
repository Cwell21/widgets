
(function() {

  //CONSTANTS TO HOLD DOM ELEMENTS FOR MENU
  const btnMenu = document.getElementById("btnMenu");
  const mnuAside = document.getElementById("modalMenu");
  const mnuSub = document.getElementById("subMenu");

  function creteSubMenu(mnu) {
    
  }


  btnMenu.addEventListener("click", () => {
    mnuAside.style.left = 0;
  })

  btnClose.addEventListener("click", () => {
    mnuAside.style.left = -10000 + "px";
  })

}());
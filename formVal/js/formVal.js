(function() {
  const elForm = document.getElementById("signUp");
  const elEmail = document.getElementById("userEmail");
  const elFirst = document.getElementById("fstName");
  const elLast = document.getElementById("lstName");
  const elSuccess = document.getElementById("splash");  
  const elClear = document.getElementById("clear");
  const elStatus = document.getElementById("status");
  const allowedInput = /^[a-zA-Z]*$/;
  
  
  var isFirst = false;
  var isLast = false;

  const handleSubmit = document.getElementById("signUp")
    .addEventListener("submit", (e) => {
      event.preventDefault();
      if (isFirst && isLast) {
        elSuccess.style.display = "flex";
        elForm.style.display = "none";
      } else {
        if(!isFirst) {
          elFirst.focus();
          elStatus.style.display = "block";
          elStatus.innerHTML = "Please enter your first name.";
          elFirst.value = "";
        } else {
          elLast.focus();
          elStatus.style.display = "block";
          elStatus.innerHTML = "Please enter your last name.";
          elLast.value = "";
        }
      }

    })
    
    elClear.addEventListener("click", (e) => {
      elEmail.value = "";
      elFirst.value = "";
      elLast.value = "";
      elEmail.focus();
    })

  elFirst.addEventListener("keyup", (e) => {
    if (!elFirst.value.match(allowedInput)) {
      elFirst.setAttribute("class", "badInput");
      isFirst = false;
    }else {
      isFirst = true;
    }
  })
  elLast.addEventListener("keyup", (e) => {
    if (!elLast.value.match(allowedInput)) {
      elLast.setAttribute("class", "badInput");
      isLast = false;
    }else {
      isLast = true;
    }    
  })

  function handleForm() {

  }
}());


 

 


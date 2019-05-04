//VARIABLES TO HOLD HTML ELEMENTS
const elForm = document.getElementById("signUp");
const elUser = document.getElementById("user");
const elPassword = document.getElementById("pass");
const elSubButton = document.getElementById("btnSub");
const elClear = document.getElementById("btnClr")
const elLower = document.getElementById("lowerCase");
const elUpper = document.getElementById("upperCase");
const elNumber = document.getElementById("number");
const elLength = document.getElementById("length");
const elMessage = document.getElementById("message");
const isGood = document.getElementsByClassName("good");
const isBad = document.getElementsByClassName("bad");


//REGULAR EXPRESIONS 
const lower = /[a-z]/;
const upper = /[A-Z]/;
const num = /[0-9]/;

//WHEN USER CLICKS IN PASSWORD INPUT, DISPLAY REQUIREMENTS
elPassword.onfocus = () => {
  elMessage.style.display = "block";
}

//IF USER LEAVES PASSWORD INPUT WITH OUT INPUT, HID REQUIREMENTS
elPassword.onblur = () => {
  if(elPassword.value.length < 1){
  elMessage.style.display = "none";
  }
}

//CHECK INPUT VS REQUIRED REG EXP TO VALIDATE INPUT
elPassword.addEventListener("keyup", event => {
  
  //CHECK FOR LOWER CASE VALUE
  if (elPassword.value.match(lower)) {
    elLower.removeAttribute("class");
    elLower.setAttribute("class", "valid");
    isBad[0].style.display = "none";
    isGood[0].style.display = "inline";

  }else { 
    elLower.removeAttribute("class");
    elLower.setAttribute("class", "invalid");
    isGood[0].style.display = "none";
    isBad[0].style.display = "inline";
  }
  //CHECK FOR UPPER CASE VALUE
  if (elPassword.value.match(upper)) {
    elUpper.removeAttribute("class");
    elUpper.setAttribute("class", "valid");
    isBad[1].style.display = "none";
    isGood[1].style.display = "inline";
  }else {
    elUpper.removeAttribute("class");
    elUpper.setAttribute("class", "invalid");
    isGood[1].style.display = "none";
    isBad[1].style.display = "inline";
  }
  //CHECK FOR NUMBER VALUE
  if (elPassword.value.match(num)) {
    elNumber.removeAttribute("class");
    elNumber.setAttribute("class", "valid");
    isBad[2].style.display = "none";
    isGood[2].style.display = "inline";
  }else {
    elNumber.removeAttribute("class");
    elNumber.setAttribute("class", "invalid");
    isGood[2].style.display = "none";
    isBad[2].style.display = "inline";
  }
  //CHECK FOR VALID LENGTH
  if (elPassword.value.length >= 8) {
    elLength.removeAttribute("class");
    elLength.setAttribute("class", "valid");
    isBad[3].style.display = "none";
    isGood[3].style.display = "inline";
  }else {
    elLength.removeAttribute("class");
    elLength.setAttribute("class", "invalid");
    isGood[3].style.display = "none";
    isBad[3].style.display = "inline";
  }
  
})
//SUBMIT BUTTON - STOP DEFAULT, ALERT USER.  NO OTHER ACTION
elSubButton.addEventListener("click", event => {
  event.preventDefault();
  if(elPassword.value.match(lower) && elPassword.value.match(upper) && elPassword.value.match(num)) {
    alert("Notice, this is for learning only, you are not creating an actual account");
  }else {
    alert("Notice, this is for learning only, you are not creating an actual account.  But your password did not meet requirements");

  }
})

//CLEAR BUTTON - CLEAR VALUES IN INPUT, SET ALL VALIDATION TO INVALID
elClear.addEventListener("click", event => {
  elPassword.value = "";
  elUser.value = "";
  elUser.focus();
  elLower.removeAttribute("class");
  elLower.setAttribute("class", "invalid");
  elUpper.removeAttribute("class");
  elUpper.setAttribute("class", "invalid");
  elNumber.removeAttribute("class");
  elNumber.setAttribute("class", "invalid");
  elLength.setAttribute("class", "invalid");
  for (let i=0; i < isBad.length; i++) {
    isBad[i].style.display = "inline";
    isGood[i].style.display = "none";
  }
  elMessage.style.display="none";
})


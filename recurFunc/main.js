//IIFE function to run when script is loaded
(function() {

  const elContainer = document.getElementById("container");
  const elInput = document.getElementById("userInput");
  const elDisplay = document.getElementById("display");
  let userInput = "";

  //Add event listener to update data real time
  elInput.addEventListener("keyup", () => {
    userInput = elInput.value;
    
    if (userInput == ""){
      elContainer.style.backgroundColor = "rgb(255,255,255)";
      elDisplay.innerHTML = "CHECK A STATEMENT FOR A PALINDROME?";
      return;
    }

    console.log("User key up detected..")
    if(userInput.toLowerCase() == revStr(userInput).toLowerCase()) {
      elDisplay.innerHTML = `Yes, ${userInput} is a Palindrome`;
      elContainer.style.backgroundColor = "rgb(25,225,5)";
    }else{
      elDisplay.innerHTML = `No, ${userInput} is not a Palindrom`;
      elContainer.style.backgroundColor = "rgb(255,255,255)";
    }
    
  })

  //Recursive function to reverse user input
  function revStr(str){
    
    //termination
    if (str === "") {
      return "";
    }else {  //recursion
      return revStr(str.substr(1)) + str.charAt(0);   
    }
  }

}());
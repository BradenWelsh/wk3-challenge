// Assignment code here
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var lengthChar = Number(window.prompt("How long do you want the password to be? 8-128"));
  if(!Number.isInteger(lengthChar) || lengthChar <=7 || lengthChar >=129){
    window.alert ("You didn't put a valid number, please try again!")
    return;
  }
  var numChar = window.confirm("Do you want numbers?");
  var upChar = window.confirm("Do you want uppercase letters?");
  var lowChar = window.confirm("Do you want lowercase letters?");
  var symbChar = window.confirm ("Do you want symbols?");

  
  var password = generatePassword(lengthChar,numChar,upChar,lowChar,symbChar);
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

function generatePassword(lengthChar,numChar,upChar,lowChar,symbChar){
  var numberChar = "0123456789";
  var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerChar = "abcdefghijklmnopqrstuvwxyz";
  var symbolChar = "!@#$%^&*(){}[]<,>?/.~`|"
  var allChars = "";
  if(numChar&&upChar&&lowChar&&symbChar){
  allChars = numberChar + upperChar + lowerChar + symbolChar;
  }else if(numChar&&upChar&&lowChar){
    allChars = numberChar + upperChar + lowerChar;
  }else if(numChar&&upChar){
    allChars = numberChar + upperChar;
  }else if(numChar&&lowChar){
    allChars = numberChar + lowerChar;
  }else if (numChar&&symbChar){
    allChars = numberChar + symbolChar;
  }else if (numChar){
    allChars = numberChar;
  }else if (upChar&&lowChar&&symbChar){
    allChars = upperChar + lowerChar + symbolChar;
  }else if (upChar&&lowChar){
    allChars = upperChar + lowerChar;
  }else if (lowChar&& symbChar){
    allChars = lowerChar + symbolChar;
  }else if (lowChar){
    allChars = lowerChar;
  }else if (symbChar){
    allChars = symbolChar
  }else if (upChar){
    allChars = upperChar;
  }
    var pass = "";
    for(var i=0; i <= lengthChar; i++){
    var rand=Math.floor(Math.random()*allChars.length);
    pass += allChars.charAt(rand,rand+1);
    console.log(pass);
  }
  return pass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

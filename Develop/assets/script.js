// Assignment code here
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var lengthChar = window.prompt("How long do you want the password to be? 8-128");
  if(lengthChar <=7 || lengthChar >=129){
    window.alert ("You didn't put a valid number, please try again!")
    return;
  }

  var numChar = window.confirm("Do you want numbers?");
  var upChar = window.confirm("Do you want uppercase letters?");
  var lowChar = window.confirm("Do you want lowercase letters?");

  var numberChars = "0123456789";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var allChars = numberChars + upperChars + lowerChars;
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

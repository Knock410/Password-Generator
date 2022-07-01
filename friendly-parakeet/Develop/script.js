// List Variables
var length; // user password length select
var lower; // user lowercase select
var upper;// uppercase select
var numeric;// number select
var special;// special character select
var selected; // Choice that the user selects

//Declaring arrays

LowerAlphabet= []nn

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

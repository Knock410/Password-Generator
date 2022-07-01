// List Variables
var length; // user password length select
var lower; // user lowercase select
var upper;// uppercase select
var numeric;// number select
var special;// special character select
var selected; // Choice that the user selects

//Declaring arrays

// Alphabet Lower case
lowerAlphabet= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
// Alphabet Upper case
upperAlphabet= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
// numeric 
numbers=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//special characters
specialCharacters= ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"]





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

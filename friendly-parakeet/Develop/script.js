// List Variables
var length; // user password length select
var lower; // user lowercase select
var upper; // user uppercase select
var numeric; // user number select
var special; // user special character select
var finalPassword; // Choice/confitms that the user selects

//Declaring arrays

// Alphabet Lower case
lowerAlphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// Alphabet Upper case
upperAlphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// numeric
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//special characters
specialCharacters = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  " < ",
  "=",
  " > ",
  " ? ",
  "@",
  "[",
  "\\",
  "]",
  " ^ ",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
//combined array user input
var userInputArray = [];

//Declaring Function to create password
var generatePassword = function () {
  // Declaration via window prompt of which variable is used to hold which user input via user input
  var lengthselectprompt = window.prompt(
    "choose a length of at least 8 characters and no more than 128 characters"
  );

  //Converts string input ex "10" to number input ex 10
  length = parseInt(lengthselectprompt);

  //Security Check
  if (length < 8 || length > 128) {
    window.alert("Try again. Number needs to be the correct length");

    generatePassword();
    return;
  } else {
    console.log("User has selected the right length");
    lower = window.confirm("Do you want to use lower case letters");
    if (lower === true) {
      userInputArray = userInputArray.concat(lowerAlphabet);
    }
    upper = window.confirm("Do you want to use upper case letters");
    if (upper === true) {
      userInputArray = userInputArray.concat(upperAlphabet);
    }
    numeric = window.confirm("Do you want to use numbers");
    if (numeric === true) {
      userInputArray = userInputArray.concat(numbers);
    }
    special = window.confirm("Do you want to use special characters");
    if (special === true) {
      userInputArray = userInputArray.concat(specialCharacters);
    }
    console.log(userInputArray)

    for(var i=0;i< length; i++)
    var finalPassword=userInputArray()
    var randomCharacter=
  }
};

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

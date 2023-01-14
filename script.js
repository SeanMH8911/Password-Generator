// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
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
let passwordText = document.querySelector("#password");
let userInput = [];
let passwordOptions = [];
let password = "";

// Function to prompt user for password options
function getPasswordOptions() {
  password = "";
  let passwordCharacterOption = prompt(
    "Please input the number of characters you would like in your password between 10 and 64",
    ""
  );
  passwordLength = parseInt(passwordCharacterOption, 0);
  if (passwordLength >= 10 && passwordLength <= 64) {
    alert(`You selected ${passwordLength}`);
    // userInput[0].passwordLength = passwordLength;
    userInput.push({ PasswordLength: passwordLength });
  } else {
    alert("Input is invalid, Please try again");
  }
  if (passwordLength >= 10 && passwordLength <= 64) {
    let lowerCharacter = confirm(
      "Would you like your password to contain lowercase characters? Press OK for yes and CANCEL for no"
    );

    let upperCharacter = confirm(
      "Would you like your password to contain uppercase characters? Press OK for yes and CANCEL for no"
    );

    let specialCharacter = confirm(
      "Would you like your password to contain special characters? Press OK for yes and CANCEL for no"
    );
    let numericCharacter = confirm(
      "Would you like your password to contain numeric characters? Press OK for yes and CANCEL for no"
    );

    if (lowerCharacter) {
      passwordOptions.push(lowerCasedCharacters);
    }
    if (upperCharacter) {
      passwordOptions.push(upperCasedCharacters);
    }
    if (specialCharacter) {
      passwordOptions.push(specialCharacters);
    }
    if (numericCharacter) {
      passwordOptions.push(numericCharacters);
    }
    if (passwordOptions.length === 0) {
      alert(
        "you must select at least one range of characters to generate a password"
      );
      getPasswordOptions();
    } else {
      generatePassword();
      passwordOptions = [];
    }
  }
}
// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  for (let i = 0; i < this.passwordLength; i++) {
    passwordOptions = passwordOptions.flat();
    password += getRandom(passwordOptions);
  }
}
// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  getPasswordOptions();
  passwordText.textContent = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

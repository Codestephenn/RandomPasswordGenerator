// Get password input box element
const passwordBox = document.getElementById("password");
// Get generate password button element
const generatePasswordBtn = document.getElementById("generate-password-btn");

const passwordCopy = document.getElementById("copy")

// Define password length and character sets
const length = 16;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "*#$_&-+()/%|~{}[]/!@^÷¥€<>=";
const allChars = upperCase + lowerCase + number + symbol;

// Function to create a random password
function createPassword() {
  let password = "";
  // Add one character from each character set
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];
  
  // Add random characters until password reaches desired length
  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  // Display generated password in input box
  passwordBox.value = password;
}

// Add event listener to generate password button
generatePasswordBtn.addEventListener("click", createPassword);

function copyPassword(){
  passwordBox.select()
  document.execCommand("copy")
}

passwordCopy.addEventListener("click", copyPassword);
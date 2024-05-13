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

function copyPassword() {
  // Select the password input box content
  passwordBox.select();

  try {
    // Execute the copy command
    const successful = document.execCommand("copy");
    // Check if the copy command was successful
    if (successful) {
      // Inform the user that the password has been copied
      alert("Password copied to clipboard!");
    } else {
      // If the copy command was not successful, inform the user
      alert("Unable to copy password. Please try again.");
    }
  } catch (err) {
    // Handle any errors that may occur during copying
    console.error("Unable to copy password:", err);
    alert("An error occurred while copying the password. Please try again.");
  }
}

passwordCopy.addEventListener("click", copyPassword);
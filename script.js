      // Password Generator project - Lavallee, Eric
var generateBtn = document.querySelector("#generate");

      // generates password
function generatePassword() {

      // list of possible characters
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var symbols = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

      // promptspassword length
  var passwordLength = parseInt(prompt("Enter password length (between 8 and 128 characters):"));

      // check if password length is okay and usable
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return "";
  }

  // prompt user for character types to include in passwordss
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSymbols = confirm("Include symbols?");

  // Check if at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols) {
    alert("Please select at least one character type.");
    return "";
  }

  // Build based on user selections

  var charset = "";
  if (includeLowercase) {
    charset += lowercase;
  }
  if (includeUppercase) {
    charset += uppercase;
  }
  if (includeNumbers) {
    charset += numbers;
  }
  if (includeSymbols) {
    charset += symbols;
  }

  // Generate password from infomation provided
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}

// Creates a password for the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Added an event listener to button
generateBtn.addEventListener("click", writePassword);

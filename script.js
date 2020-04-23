// Assignment Code
var generateBtn = document.querySelector("#generate");
var listChar = ["A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H","I", "i", "J", "j", "K","L","M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "&", "!", "%", "$", "@", "^", "*", "-", "?", ";", ".", "/"];


// Write password to the #password input
document.querySelector("button").addEventListener("click", function writePassword() {
  event.preventDefault();
  
  //reset the password generator to an empty container
  var randomPassword = '';
  
  //pull 8 characters from the list randomly and logs on to console
  for (var i = 0; i < 8; i++) {
    var passwordText = Math.floor(Math.random() * listChar.length);
    randomPassword += listChar[passwordText];
  console.log(randomPassword);
  }
  //display random password at the "password" ID
  document.querySelector("#password").textContent = randomPassword;

})


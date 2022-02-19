//Function to generate password.
function generatePassword(){
//Set by default to 0 so we can cause a restart if none of the prompts are chosen.
  var character = 0;


  alert("You will be asked for a number of prompts, confirm at least one to begin.");
var specialFactor = window.confirm("Do you want characters such as @#$% for password?");
//If confirmed, character will get a new value.
  if (specialFactor){
    character = "!@#$%^&*()";
    console.log(character);
  }
  //else character will remain the same
  else{
    character = character;
    console.log(character);
  }

var upperFactor = window.confirm("Do you want UPPER CASE as a requirement?");
//If confirmed, and character is still 0, then it will update with only caps
  if (upperFactor && character === 0){
    character = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log(character);
  }
  //If confirmed and character already has information from previous confirm
  //then it will combine both of them.
  else if (upperFactor && character !== 0){
    character = character + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log(character);
  }
  //Else character is still 0.
  else {
    character = character;
    console.log(character);
  }

var lowerFactor = window.confirm("Do you want lower case as a requirement?");
//If confirmed, and character is still 0, then it will update with only lower case
  if (lowerFactor && character === 0){
  character = "abcdefghijklmnopqrstuvwxyz";
  console.log(character);
  }
  //If confirmed and character already has information from previous confirm
  //then it will combine both of them.
  else if (lowerFactor && character !== 0){
  character = character +"abcdefghijklmnopqrstuvwxyz";
  console.log(character);
  }
    //Else character is still 0.
  else {
  character = character;
  console.log(character);
  }

var numberFactor = window.confirm("Do you want numbers as part of the requirement?")
//If confirmed, and character is still 0, then it will update with only numbers
   if (numberFactor && character === 0){
  character = "0123456789";
  console.log(character);
  }
  //If confirmed and character already has information from previous confirm
  //then it will combine both of them.
  else if (numberFactor && character !==0){
    character = character + "0123456789";
    console.log(character);
  }
      //Else character is still 0.
  else {
    character = character;
    console.log(character);
  }
  //If it still reads as 0 value, it will restart again
  if ( character === 0){
    alert("At least one must be active to generate password. Restarting...");
    generatePassword();
  }
  //Otherwise it will start generateLength function.
  else {
    generateLength();
    //Given all information, it will generate password randomly.
    for (var i = 1; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * character.length);
      password += character.substring(randomNumber, randomNumber +1);
     }
   return password;
  }
 
 }

 var generateLength = function(){

  var confirmLength = window.prompt("How many character should the password be? (Note: Must be withing 8 - 128 character");
  //If the user picks a number from 8 -128, then it stores it.
  if (confirmLength >= 8 && confirmLength <= 128) {
    passwordLength= confirmLength;
    console.log (passwordLength);
  }
  //If not, then it will restart this function.
  else {
    alert("Error, length must not be less than 8 or greater than 128 characters");
    generateLength();
 }
}

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


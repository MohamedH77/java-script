
var generateBtn = document.querySelector("#generate");
var specialcharacters = [ "!", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var letter = ["a","b","c","d","e","f","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var num = ["0","1","2","3","4","5","6","7","8","9"];
var users = [""];


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);



function generatePassword() {
  var passLength = parseInt(prompt("How many characters would you like?"));
  if(passLength < 8){
    alert("Password must be at least 8");
    return generatePassword()}
  
      
  if(passLength > 128){
    alert("Password most not go byond 128 characters");
    return generatePassword()
  }

  var upper= confirm("Include upper case letters?");
  var lower= confirm("Include lower case letters?");
  var special= confirm("Include special characters?");
  var number= confirm("Include numbers?");

  
    if (upper) {
      users = users.concat(letter.map(function(x) { return x.toUpperCase(); }));
    }

    if (lower) {
      users = users.concat(letter);
    }
    
    if (special) {
      users = users.concat(specialcharacters);
    }
    
    if (number) {
      users = users.concat(num);
    }

    var result= "";
    console.log(passLength);

for (var i = 0; i < passLength; i++) {
  result += users[Math.floor(Math.random() * users.length)];
}
return result;
}


function copied() {
  document.getElementById("password").select();
  document.execCommand("copy");
  alert("The password has been copied to your clipboard");

}
generateBtn.addEventListener("click", copied);



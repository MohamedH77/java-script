
var generateBtn = document.querySelector("#generate");
var specialcharacters = [ "!", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", ];
var letter = ["a","b","c","d","e","f","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var num = ["0","1","2","3","4","5","6","7","8","9",];
var users = [""]


function generatePassword() {
  var passLength = parseInt(prompt("How many characters would you like?"));
  if(passLength < 8){
    alert("Password must be at least 8");
    return generatePassword()}
  
      
  if(passLength > 128){
    alert("Password most not go byond 128 characters");
    return generatePassword()
  }
    {
      var upper= confirm("Include upper case letters?")
      var lower= confirm("Include lower case letters?")
      var special= confirm("Include special characters?")
      var number= confirm("Include numbers?")

    }
    
    if(upper){
      users += upper
    }
    if(lower){
      users += lower
    }
  
    if(special) {
      users += special
    }
  
    if(number) {
      users += number
    }
    
for (var i = 0; i < passLength; i++) {
  result += users.charAt(Math.floor(Math.random() * users.passLength));
}
return result;

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);


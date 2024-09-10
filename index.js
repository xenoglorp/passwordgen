const passButton = document.getElementById("genPass");
const passAlert = document.getElementById("alert");
const displayPass = document.getElementById("finalPassword");

function generate(){
    let length =  document.getElementById("pwLength").value;
    let includeLower =  document.getElementById("pwLower").checked;
    let includeUpper =  document.getElementById("pwUpper").checked;
    let includeNum =  document.getElementById("pwNum").checked;
    let includeSpecial =  document.getElementById("pwSpecial").checked;
    let allowedChars = "";
    let password = "";

if (includeLower) allowedChars += "abcdefghijklmnopqrstuvwxyz";
if (includeUpper) allowedChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
if (includeNum) allowedChars += "0123456789";
if (includeSpecial) allowedChars += "!@#$%^&*()-=_+[]{}\:;<>?/";

if (length < 6 || allowedChars.length === 0) {
    passAlert.textContent = "Your password cannot be less than 6 characters or without any character sets selected!";
    return;

    
}

for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * allowedChars.length);
    let randomChar = allowedChars[randomIndex];
    password += randomChar;
}

displayPass.textContent = `Your password is: ${password} `;
passAlert.textContent = ""; // Clear the alert message

}

passButton.addEventListener("click", () => {
    generate();
});
let passwordLength = document.getElementById("char-length-div2").innerText;
let conForLowCase = document.getElementById("smallCharCheck");
let conForUpCase = document.getElementById("capCharCheck");
let conForNumber = document.getElementById("numCheck");
let conForSymbol = document.getElementById("symbolCheck");
let range = document.getElementById("range-bar");
let passwordDiv = document.getElementById("password-div");
let strengthCount = 0 ;
function rangeGive(){
    let lengthShowDiv = document.getElementById("char-length-div2");
    lengthShowDiv.innerText=range.value;
}

//Function to password strength color shows
function passwordStrength() {
    if(strengthCount == 1){
        document.getElementById("strength-letter").innerText="TOO WEAK!";
        document.getElementById("strengthDiv1").style.backgroundColor="#F64A4A";
        document.getElementById("strengthDiv1").style.border="3px solid #F64A4A";
        document.getElementById("strengthDiv2").style.backgroundColor="transparent";
        document.getElementById("strengthDiv2").style.border="3px solid #FFFFFF";
        document.getElementById("strengthDiv3").style.backgroundColor="transparent";
        document.getElementById("strengthDiv3").style.border="3px solid #FFFFFF";
        document.getElementById("strengthDiv4").style.backgroundColor="transparent";
        document.getElementById("strengthDiv4").style.border="3px solid #FFFFFF";
    }
    else if(strengthCount == 2 ){
        document.getElementById("strength-letter").innerText="WEAK";
        document.getElementById("strengthDiv1").style.backgroundColor="#FB7C58";
        document.getElementById("strengthDiv1").style.border="3px solid #FB7C58";
        document.getElementById("strengthDiv2").style.backgroundColor="#FB7C58";
        document.getElementById("strengthDiv2").style.border="3px solid #FB7C58";
        document.getElementById("strengthDiv3").style.backgroundColor="transparent";
        document.getElementById("strengthDiv3").style.border="3px solid #FFFFFF";
        document.getElementById("strengthDiv4").style.backgroundColor="transparent";
        document.getElementById("strengthDiv4").style.border="3px solid #FFFFFF";    
    }
    else if(strengthCount == 3){
        document.getElementById("strength-letter").innerText="MEDIUM";
        document.getElementById("strengthDiv1").style.backgroundColor="#F8CD65";
        document.getElementById("strengthDiv1").style.border="3px solid #F8CD65";
        document.getElementById("strengthDiv2").style.backgroundColor="#F8CD65";
        document.getElementById("strengthDiv2").style.border="3px solid #F8CD65";
        document.getElementById("strengthDiv3").style.backgroundColor="#F8CD65";
        document.getElementById("strengthDiv3").style.border="3px solid #F8CD65";
        document.getElementById("strengthDiv4").style.backgroundColor="transparent";
        document.getElementById("strengthDiv4").style.border="3px solid #FFFFFF";    
    }
    else if(strengthCount ==4) {
        document.getElementById("strength-letter").innerText="STRONG";
        document.getElementById("strengthDiv1").style.backgroundColor="#A4FFAF";
        document.getElementById("strengthDiv1").style.border="3px solid #A4FFAF";
        document.getElementById("strengthDiv2").style.backgroundColor="#A4FFAF";
        document.getElementById("strengthDiv2").style.border="3px solid #A4FFAF";
        document.getElementById("strengthDiv3").style.backgroundColor="#A4FFAF";
        document.getElementById("strengthDiv3").style.border="3px solid #A4FFAF";
        document.getElementById("strengthDiv4").style.backgroundColor="#A4FFAF";
        document.getElementById("strengthDiv4").style.border="3px solid #A4FFAF";    
    }
    else{
        document.getElementById("strength-letter").innerText="";
        document.getElementById("strengthDiv1").style.backgroundColor="transparent";
        document.getElementById("strengthDiv1").style.border="3px solid #FFFFFF";
        document.getElementById("strengthDiv2").style.backgroundColor="transparent";
        document.getElementById("strengthDiv2").style.border="3px solid #FFFFFF";
        document.getElementById("strengthDiv3").style.backgroundColor="transparent";
        document.getElementById("strengthDiv3").style.border="3px solid #FFFFFF";
        document.getElementById("strengthDiv4").style.backgroundColor="transparent";
        document.getElementById("strengthDiv4").style.border="3px solid #FFFFFF";    
    }
}
//Function to generate random password
function generatePassword () {
    document.getElementById("copy-button").style.color="transparent";
    const upper = conForUpCase.checked;
    const lower = conForLowCase.checked;
    const number = conForNumber.checked;
    const symbol = conForSymbol.checked;
    if(upper==true) strengthCount +=1;
    if(lower==true) strengthCount +=1;
    if(number==true) strengthCount+=1;
    if(symbol==true) strengthCount+=1;
    passwordStrength();
    let letter = {conForUpCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",conForLowCase: "abcdefghijklmnopqrstuvwxyz",conForNumber: "0123456789",conForSymbol: "!@#$%^&*()_+~\\`|}{[]:;?><,./-="} 
    let getLetter = [
        function capCharCheck() {
          return letter.conForUpCase[Math.floor(Math.random() * letter.conForUpCase.length)];
        },
        function smallCharCheck() {
          return letter.conForLowCase[Math.floor(Math.random() * letter.conForLowCase.length)];
        },
        function numCheck() {
          return letter.conForNumber[Math.floor(Math.random() * letter.conForNumber.length)];
        },
        function symbolCheck() {
          return letter.conForSymbol[Math.floor(Math.random() * letter.conForSymbol.length)];
        }
      ];

    if(conForLowCase.checked + conForUpCase.checked + conForNumber.checked + conForSymbol.checked ===0 ) alert("Please check atleast one box :) ");
    else{
    let password = "";
    while (range.value > password.length) {
        let letterToAdd = getLetter[Math.floor(Math.random() * getLetter.length)];
        let isChecked = document.getElementById(letterToAdd.name).checked;
        if (isChecked) password += letterToAdd();
        
    }
    passwordDiv.innerText = password ;
    strengthCount = 0 ;
}
}
//Initialization function
addEventListener('DOMContentLoaded', (event) => {
    let lengthShowDiv = document.getElementById("char-length-div2");
    conForLowCase.checked=true;
    lengthShowDiv.innerText=range.value;
    generatePassword();
});
//Function to copy password
function copyPassword(){
    navigator.clipboard.writeText(passwordDiv.innerText);
    document.getElementById("copy-button").style.color="#A4FFAF";
}
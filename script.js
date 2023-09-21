//elements from html:
const firstDigit=document.getElementById("first-digit");
const secondDigit=document.getElementById("second-digit");
const thirdDigit=document.getElementById("third-digit");
const fourthDigit=document.getElementById("fourth-digit");
const fifthDigit=document.getElementById("fifth-digit");
const getDigit=document.getElementById("get-digit");
const reDo=document.getElementById("re-do");
const winnerNumber=document.getElementById("winner-number");




//on click Get Digit:
getDigit.addEventListener("click",generateDigit);

//on click ReDo:
reDo.addEventListener("click",reGenerateNumber);
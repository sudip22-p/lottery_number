//elements from html:
const firstDigit = document.getElementById("first-digit");
const secondDigit = document.getElementById("second-digit");
const thirdDigit = document.getElementById("third-digit");
const fourthDigit = document.getElementById("fourth-digit");
const fifthDigit = document.getElementById("fifth-digit");
const getDigit = document.getElementById("get-digit");
const reDo = document.getElementById("re-do");
const winnerNumber = document.getElementById("winner-number");
const digitsSelected = document.getElementsByClassName("selected");
let digitIndex = 1;
let lotteryNumber = "";
let intervalId;

//getting random number from 0 to 10:
function getRandomNumber() {
    return Math.floor(Math.random() * 10);
}


//getting a digit:
function generateDigit() {
    let digit = getRandomNumber();
    while (digitsSelected.length == 0 && digit == 0) {
        digit = getRandomNumber();
    }
    intervalId = setInterval(() => {
        let randDigit = getRandomNumber();
        if (digitIndex == 1) {
            firstDigit.innerHTML = `${randDigit}`;
        }
        else if (digitIndex == 2) {
            secondDigit.innerHTML = `${randDigit}`;
        }
        else if (digitIndex == 3) {
            thirdDigit.innerHTML = `${randDigit}`;
        }
        else if (digitIndex == 4) {
            fourthDigit.innerHTML = `${randDigit}`;
        }
        else if (digitIndex == 5) {
            fifthDigit.innerHTML = `${randDigit}`;
        }
    }, 10);
    setTimeout(() => {
        if (digitIndex == 1) {

            clearInterval(intervalId);
            firstDigit.innerHTML = `${digit}`;
            lotteryNumber += digit.toString();
            firstDigit.classList.add("selected");
            digitIndex += 1;
        }
        else if (digitIndex == 2) {

            clearInterval(intervalId);
            secondDigit.innerHTML = `${digit}`;
            lotteryNumber += digit.toString();
            secondDigit.classList.add("selected");
            digitIndex += 1;
        }
        else if (digitIndex == 3) {

            clearInterval(intervalId);
            thirdDigit.innerHTML = `${digit}`;
            lotteryNumber += digit.toString();
            thirdDigit.classList.add("selected");
            digitIndex += 1;
        }
        else if (digitIndex == 4) {

            clearInterval(intervalId);
            fourthDigit.innerHTML = `${digit}`;
            lotteryNumber += digit.toString();
            fourthDigit.classList.add("selected");
            digitIndex += 1;
        }
        else if (digitIndex == 5) {

            clearInterval(intervalId);
            fifthDigit.innerHTML = `${digit}`;
            lotteryNumber += digit.toString();
            fifthDigit.classList.add("selected");
            digitIndex += 1;
            winnerNumber.innerHTML = `${lotteryNumber}`;
            setTimeout(() => {
                document.getElementById("digit-choose").style.display = "none";
                getDigit.style.display = "none";
                document.getElementById("number-reveal").style.display = "flex";
                reDo.style.display = "block";
            }, 1600);
        }
    }, 1800);
}


//regetting another ltry num...
function reGenerateNumber() {
    location.reload();
}

//on click Get Digit:
getDigit.addEventListener("click", generateDigit);

//on click ReDo:
reDo.addEventListener("click", reGenerateNumber);
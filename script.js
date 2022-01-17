let ip1 = document.getElementById("firstNumber");
let ip2 = document.getElementById("secondNumber");
let userInput = document.getElementById("userInput")
let correct = document.getElementById("checkButton");
let re = document.getElementById("restartButton");
let result = document.getElementById("gameResult");
let firstRandomNumber = Math.random() * 100;
let secondRandomNumber = Math.random() * 100;
ip1.textContent = Math.ceil(firstRandomNumber);
ip2.textContent = Math.ceil(secondRandomNumber);

function c2() {
    result.textContent = "";
    userInput.value = "";
}
c2();

function c1() {
    let f1 = parseInt(ip1.textContent);
    let f2 = parseInt(ip2.textContent);
    let ans = parseInt(userInput.value);
    let sol = f1 + f2
    if (ans === sol) {
        result.textContent = "Congratulations! You got it right.";
        result.style.backgroundColor = "#028a0f";
    } else {
        result.textContent = "Please Try Again!";
        result.style.backgroundColor = "#1e217c";
    }
}
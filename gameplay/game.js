// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
var numberOne = Math.round(Math.random() * 100);
const numberBoxOne = document.getElementById("number1")

var numberTwo = Math.round(Math.random() * 100);
const numberBoxTwo = document.getElementById("number2")

// Iteration 3: Creating variables required to make the game functional
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const mul = document.getElementById("mul");
const divide = document.getElementById("divide");
const modulus = document.getElementById("modulus");

var score = 0
var operator;

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
var numberThree = Math.round(Math.random() * 100);
const numberBoxThree = document.getElementById("number3")

// Iteration 5: Creating a randomise function to make the game functional
function randomise() {
    numberOne = Math.round(Math.random() * 100);
    numberTwo = Math.round(Math.random() * 100);

    if(numberOne < numberTwo) {
        var result  = numberOne;
        numberOne = numberTwo;
        numberTwo = result;
    }
    operator = Math.round(Math.random() * 5)
    switch(operator) {
        case 1:
            numberThree = numberOne + numberTwo;
            break;

        case 2:
            numberThree = numberOne - numberTwo;
            break;
        
        case 3:
            numberThree = numberOne * numberTwo
            break;

        case 4:
            numberThree = Math.floor(numberOne / numberTwo);
            break;
        
        case 5:
            numberThree = numberOne % numberTwo;
            break;
        case 0 :
            randomise();
    }
    numberBoxOne.innerText = numberOne;
    numberBoxTwo.innerText = numberTwo;
    numberBoxThree.innerText = numberThree; 
    console.log(numberOne + " " + numberTwo + " " + numberThree + " " + operator) 
}

randomise();

// Iteration 6: Making the Operators (button) functional
plus.onclick = () => {
    if(numberThree === numberOne + numberTwo) {
        randomise();
        score++;
        resetTime(timerId);
    } else {
        location.href = "../gameover/gameover.html"
    }
}

minus.onclick = () => {
    if(numberThree === numberOne - numberTwo) {
        randomise();
        score++;
        resetTime(timerId);

    } else {
        location.href = "../gameover/gameover.html"
    }
}

mul.onclick = () => {
    if(numberThree === numberOne * numberTwo) {
        randomise();
        score++;
        resetTime(timerId);
    } else {
        location.href = "../gameover/gameover.html"
    }
}

divide.onclick = () => {
    if(Math.floor(numberOne / numberTwo) === numberThree) {
        randomise();
        score++;
        resetTime(timerId);
    } else {
        location.href = "../gameover/gameover.html"
    }
}

modulus.onclick = () => {
    if(numberThree === numberOne % numberTwo) {
        randomise();
        score++;
        resetTime(timerId);
    } else {
        location.href = "../gameover/gameover.html"
    }
}


// Iteration 7: Making Timer functional
var time = 20;
var timer = document.getElementById("timer");
var timerId;

function setTimer() {
    time = 20;
    timer.innerHTML = time;
    timerId = setInterval(() => {
        time --;
        if(time == 0) {
            location.href = "../gameover/gameover.html";
        }
        timer.innerHTML = time;
    }, 1000);
    localStorage.setItem("score", score);
}

function resetTime(intervalId) {
    clearInterval(intervalId);
    setTimer();
}
  
setTimer();
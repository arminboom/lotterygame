let Money = 0 
let Roll = 0
let points = 0

function MoneyOnClick() {
    document.getElementById("MoneyAmount").innerHTML=(++Money)
}

function rollNumbers() {  
var input = document.getElementById("inputNumbers").value
const inputNumbers = input.split(',').map(Number);
var num1, num2, num3, num4, num5;
if(Money <= 9) {
num1 = num2 = num3 = num4 = num5 = Math.floor((Math.random() * 9007199254740991) + 1);
} else do {
num1 = Math.floor((Math.random() * 90) + 101);
num2 = Math.floor((Math.random() * 90) + 101);
num3 = Math.floor((Math.random() * 90) + 101);
num4 = Math.floor((Math.random() * 90) + 101);
num5 = Math.floor((Math.random() * 90) + 101);
} while (num1 === num2 || num1 === num3 || num1 === num4 || num1 === num5 || num2 === num3 || num2 === num4 || num2 === num5 || num3 === num4 || num3 === num5 || num4 === num5); 

points = 0
for (const num of inputNumbers) {
if (num === num1 || num === num2 || num === num3 || num === num4 || num === num5) {
    points++;
}
}

if(points===5)
    var num6 = Math.floor((Math.random() * 14) + 1)
    if(num6===14)
        points=6;

var num7 = Math.floor((Math.random() * 1000) + 1)
    if(num7===1000)
        points=7

var num8 = Math.floor((Math.random() * 123456) + 1)
    if(num8===123456)
        points=8

var num9 = Math.floor((Math.random() * 1000000) + 1)
    if(num9===1000000)
        points=9

if(points===4)
    var num10 = Math.floor((Math.random() * 10000) + 1)
    if(num10===10000)
        points=10;

if(points===0)
    var num11 = Math.floor((Math.random() * 1000) + 1)
    if(num11===1000)
        points=11;

const messages = [
"Womp womp.",
"Meh, you got 1 matching number",
"You managed to get 2 matching numbers, well done.",
"Oh nice! You got 3 matching numbers, well done!",
"WHOA, 4 matching numbers? You are lucky!",
"YOU WON THE LOTTERY!!! 🤑🤑🤑 YOU GOT 5 MATCHING NUMBERS!!! 🎉🎉🎉",
"You... Can't be serious... You just broke the reality of the lottery... 6 Matching numbers is just unbelievable...",
"Unfortunate.",
"Im guessin' your password... 123456 😈",
"As they say, one in a krillion.",
"You feel an astronomical sum of fabulous fortune casted upon this roll.",
"Worse than getting 0 correct...",
"It seems like you can afford a lottery ticket now, but here's the question: wouldn't it been easier if you just clicked on the [$] button a few times...?",
];
// this breaks the ++Money*x but idc it'll have no meaning for now
let message = messages[points];
document.getElementById("Rolls").innerHTML=(`Generated numbers: ${num1},${num2},${num3},${num4},${num5} | Your numbers: ${inputNumbers} | ${message}`);
if(Money <= 9)
document.getElementById("Rolls").innerHTML = "You don't have enough money!";
}

rollNumbers();

function LotteryOnClick() {
    if(points===1) {
        Money += 30;
        document.getElementById("MoneyAmount").innerHTML= (Money);
    } else if(points===2) {
        Money += 185;
        document.getElementById("MoneyAmount").innerHTML= (Money);
    } else if(points===3) {
        Money += 2510;
        document.getElementById("MoneyAmount").innerHTML= (Money);
    } else if(points===4) {
        Money += 250010;
        document.getElementById("MoneyAmount").innerHTML= (Money);
    } else if(points===5) {
        Money += 125000010;
        document.getElementById("MoneyAmount").innerHTML= (Money);
    } else if(points===6) {
        Money += 2000000010;
        document.getElementById("MoneyAmount").innerHTML= (Money);
    } else if(points===7) {
        Money += 11;
        document.getElementById("MoneyAmount").innerHTML= (Money);
    } else if(points===8) {
        Money += 54331;
        document.getElementById("MoneyAmount").innerHTML= (Money);
    } else if(points===9) {
        Money += 555565;
        document.getElementById("MoneyAmount").innerHTML= (Money);
    } else if(points===10) {
        Money += 3333333343;
        document.getElementById("MoneyAmount").innerHTML= (Money);
    } else if(points===11) {
        Money += 12;
        document.getElementById("MoneyAmount").innerHTML= (Money);
    }
}

function DeductMoneyOnLottery() {
    if (Money >= 10) {
    Money -= 10;
    document.getElementById("MoneyAmount").innerHTML=(Money)
    Roll++
    document.getElementById("RollsAmount").innerHTML=(Roll)
    } else if (Money < 10) {
    Money -= 0;
    document.getElementById("MoneyAmount").innerHTML=(Money) 
    }
}

function Clear() {
    document.getElementById("inputNumbers").value = ""
}

var x = document.getElementById("Music"); 

    function playAudio() { 
        var x = document.getElementById("Music"); 
        if (x) x.play();
    } 
    
    function pauseAudio() { 
        var x = document.getElementById("Music"); 
        if (x) x.pause();
    }
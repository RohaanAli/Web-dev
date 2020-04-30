function generateRandom1()
{
    var randomNumber = Math.floor((Math.random() * 6) +1);
    // var imgSource1 = "";
    document.querySelectorAll("img")[0].setAttribute("src", `D:/Training/Portfolio/Dice Game/images/dice${randomNumber}.png`);
    return randomNumber;
 
}

function generateRandom2()
{
    var randomNumber = Math.floor((Math.random() * 6) +1);
    var imgSource2 = "D:/Training/Portfolio/Dice Game/images/dice" + randomNumber + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", imgSource2);
    return randomNumber;
}

var dice1 = generateRandom1();
var dice2 = generateRandom2();

if(dice1 > dice2)
{
    document.querySelector("h1").innerText = "Player 1 wins"; 
}
else if(dice1 < dice2)
{
    document.querySelector("h1").innerText = "Player 2 wins";
}
else
{
    document.querySelector("h1").innerText = "Draw!!";
}

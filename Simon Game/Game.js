var gamePattern = [];
var userPattern = [];
var buttonColors = ["red","blue", "green", "yellow"];
var level = 0;
var start = false;
$(document).on('keypress', function()
{
    if(!start)
    {
        gameplay();
        start = true;
    }
}
);

function gameplay()
{
    userPattern = [];
    $('#level-title').text('level ' + level);
    var randomChosenColor = buttonColors[nextSequence()];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    level++;
}


$(".btn").on('click', function()
{
    var userChosenColor = $(this).attr('id');
    userPattern.push(userChosenColor);
    $("#" + userChosenColor).fadeOut(100).fadeIn(100);
    animatePress(userChosenColor);
    playSound(userChosenColor);
    checkAnswer(userPattern.length -1);
}

);

function checkAnswer(currentlevel)
{
    if(gamePattern[currentlevel] === userPattern[currentlevel])
    {
        if(userPattern.length === gamePattern.length)
            {
                setTimeout(gameplay(), 1000); 
            }
    }
    else
    {
        $("body").addClass("game-over");
        $("#level-title").text("Press any Key to Start");
        setTimeout(function()
        {
            $("body").removeClass("game-over")
        }, 200);

        $("#level-title").text("Game over, Press any key to restart");
        startOver();
    }
    
}

function startOver()
{
    
    start = false;
    level = 0;
    gamePattern = [];

}
function animatePress(currentColor)
{
    $('#' + currentColor).addClass('pressed');

    setTimeout(function() 
    {
        $('#' + currentColor).removeClass('pressed');
    } , 100);
}



function nextSequence()
{
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}

function playSound(key)
{
    switch (key) 
    {
            case "red":
                var sound = new Audio('sounds/red.mp3');
                sound.play();
                break;
            case "blue":
                var sound = new Audio('sounds/blue.mp3');
                sound.play();
                break;
            case "green":
                var sound = new Audio('sounds/green.mp3');
                sound.play();
                break;
            case "yellow":
                var sound = new Audio('sounds/yellow.mp3');
                sound.play();
                break;
            default:
                break;
        
    }
}

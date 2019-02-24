//Create a game where players have a set time to answer trivia questions. 
//Timer starts when page loads. Answers are true or false. 
//Players click on true or false buttons.
//When player answers - imediately display check for right or x for wrong.

$(document).ready(function() {

var rightAnswer = 0
var wrongAnswer = 0
var right = true
var wrong = false
var comfirmRight = true
var confirmWrong = false


//  Set number to countdown from 30.
var number = 30;
var startCounting;

//  When the start button gets clicked, start the countdown
$("#ready").on("click", run());
    //run()


//  Clearing the interval prior to setting our new interval will not allow multiple instances.
function run() {
  clearInterval(startCounting);
  startCounting = setInterval(decrement, 1000);
}
//  Countdown
function decrement() {
  number--;
  $("#countdown").html(number);
  if (number === 0) {
    stop();
    //alert("Time Up!");
  }
}
//  Stop
function stop() {
  clearInterval(startCounting);
}
//  Execute the run function.
run();





      // Here we create the on click event which captures the players choice
      $("#aTrue").on("click", function() {

        function gamePlay(playerChooses)    {
        
            right += playerChooses;
            console.log("Score: " + rightAnswers);
            if (rightAnswer == right)    {
                console.log("You chose right!" + rightAnswer);
                rightAnswer++;
                $("#confirm").HTML("assets/images/checkmark.jpg")
                newGame();
            }
            else if (rightAnswer !== right)    {
                console.log("You chose wrong!" + wrongAnswer);
                wrongAnswer++;
                $("#confirm").HTML("assets/images/xmark.jpg")
                newGame();
            }
        }

        newGame();

        //This function scores when answer button is clicked.
        $("#answers1").click(function()  {
            console.log(" " + " was clicked.");
            gamePlay(answers);
        });
    
        //This function scores points every time Game Piece 2 is clicked.
        $("#answers2").click(function()  {
            console.log(" " + " was clicked.");
            gamePlay(answers);
        });
    
        //This function scores points every time Game Piece 3 is clicked.
        $("#answers3").click(function()  {    
            console.log(" " + " was clicked.");
            gamePlay(gamePiece3);
        });
    
        //This function scores points every time Game Piece 4 is clicked.
        $("#answers4").click(function()  {    
            console.log(" " + " was clicked.");
            gamePlay(answers);
        });






      });
    });

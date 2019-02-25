//Create a game where players have a set time to answer trivia questions. 
//Timer starts when page loads. Answers are true or false. 
//Players click on true or false buttons.
//When player answers - imediately display check for right or x for wrong.

alert("Hello");

$(document).ready(function() {

    var userPick; 
    var rightAnswer = 0;
    var wrongAnswer = 0;
    var questions = [
        {   question: "The Humble Wine Bar bakes their pizza's at over 600 degrees fahrenheit?",
        choices: ["True", "False"],
        validAnswer: 0
        }, 
        {   question:"There are over 1000 muscles in your body?",
        choices: ["True", "False"],
        validAnswer: 1
        }, 
        {   question:"The Lamborghini Aventador is the most expensive car in the world?",
        choices: ["True", "False"],
        validAnswer: 1
        }, 
        {   question:"Redbubble is a print-on-demad website where you can buy cool t-shirts and other custom products?",
        choices: ["True", "False"],
        validAnswer: 0
        }, 
        {   question:"Coding is fucking hard?",
        choices: ["True", "False"],
        validAnswer: 0
        },
        {   question:"LeBron James plays for the Cleveland Cavaliers",
        choices: ["True", "False"],
        validAnswer: 1
        },
        {   question:"A dirty Martini was dropped on the floor?",
        choices: ["True", "False"],
        validAnswer: 1
        },
        {   question:"James Bond drinks his Martini's stirred, not shaken?",
        choices: ["True", "False"],
        validAnswer: 1
        }, 
        {   question:"The Cleveland Indians won 150 games in the 1995 season?",
        choices: ["True", "False"],
        validAnswer: 1
        }, 
        {   question:"Anchovies are known as the 'Chicken of the sea?",
        choices: ["True", "False"],
        validAnswer: 1
        }, 
        {   question:"Cinnamon is made naturally from tree bark?",
        choices: ["True", "False"],
        validAnswer: 0
        }, 
        {   question:"The Rolling Stones produced their first album in 1962?",
        choices: ["True", "False"],
        validAnswer: 0
        },
    ];

//Timer
//  Set number to countdown from 30.
    var number = 30;
    var startCounting;

//  When the start button gets clicked, start the countdown
    $("#ready").on("click", function()  {
    //function run() {
        clearInterval(startCounting);
        startCounting = setInterval(decrement, 1000);
    });
//  Countdown
    function decrement() {
    number--;
    $("#countdown").html(number);
    if (number === 0) {
        stop();
        //  when time runs out alert player of right and wrong answers. Invite player to play again
        alert("Time's up", "Number of right answers: " + rightAnswers, "Number of wrong answers: " + wrongAnswers, "Please play again!");
    }
    }
//  Stop
    function stop() {
    clearInterval(startCounting);
    }
    //  Execute the run function.
    //run();
//  timer code ends here

//  function to choose and display random question in the 4 different question divs
    function displayQuestions() {
        for (i = 0; i < questions.length; i++) {
            $("#question1").append("questions[i]")
            $("#question2").append("questions[i]")
            $("#question3").append("questions[i]")
            $("#question4").append("questions[i]")
                console.log("questions[i]")
        }
    }; displayQuestions();
//  display questions function ends here

//  function to capture player answer, display correct or incorrect graphic associated with that choice in the 4 different confirm divs
//  and add one to the appropriate right vs. wrong answers variable
    function displayAnswers()   {
        $(".answers1").on("click", function(event) {
            if (userPick == questions[i].validAnswer)  {
                $("#confirm1").attr("src", "assets/images/checkmark.jpg");
                $("#confirm2").attr("src", "assets/images/checkmark.jpg");
                $("#confirm3").attr("src", "assets/images/checkmark.jpg");
                $("#confirm4").attr("src", "assets/images/checkmark.jpg");
                rightAnswer++
                    console.log("Number of right answers: " + rightAnswers);
            }   else (userPick !== questions[i].validAnswer)  
                    $("#confirm1").attr("src", "assets/images/xmark.jpg");
                    $("#confirm2").attr("src", "assets/images/xmark.jpg");
                    $("#confirm3").attr("src", "assets/images/xmark.jpg");
                    $("#confirm4").attr("src", "assets/images/xmark.jpg");
                    wrongAnswer++
                        console.log("Number of wrong answers: " + wrongAnswers);
        }); 
// The on click event should execute the display answers function
//  display answers function ends here        

//  this event replaces the four answered questions with new questions and clears the answer graphics from the 4 different confirm divs
    $("#playAgain").on("click", function() { 
        displayQuestions();
            $("#confirm1").empty();
            $("#confirm2").empty();
            $("#confirm3").empty();
            $("#confirm4").empty();
                console.log("play again button was clicked");
    });
    //  play again function ends here
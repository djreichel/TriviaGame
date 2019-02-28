//Create a game where players have a set time to answer trivia questions. 
//Timer starts when page loads. Answers are true or false. 
//Players click on true or false buttons.
//When player answers - imediately display check for right or x for wrong.

//alert("hello");

$(document).ready(function() {

    var userPick; 
    var rightAnswers = 0;
    var wrongAnswers = 0;
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
        {   question:"Redbubble is a print-on-demand website where you can buy cool t-shirts and other custom designed products?",
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
    }
    }
//  Stop
    function stop() {
    clearInterval(startCounting);
    //  when time runs out alert player of right and wrong answers. Invite player to play again
    alert("Time's up", "Number of right answers: " + rightAnswers, "Number of wrong answers: " + wrongAnswers, "Please play again!");
    }
//  timer code ends here

//  function to choose and display random question in the 4 different question divs
    function displayQuestions() {
        for (var i = 0; i < questions.length; i++) {
            $("#question1").text(questions[i].question)
            $("#question2").text(questions[i].question)
            $("#question3").text(questions[i].question)
            $("#question4").text(questions[i].question)
                console.log(questions[i].question)
        }
    }; displayQuestions();  //  display questions function ends here

//  function to capture player answer, display correct or incorrect graphic associated with that choice in the 4 different confirm divs
//  and increase by one the appropriate right vs. wrong answers variable
    function displayAnswers()   {

        //  conditional statement for true button question 1
        $("#aTrue1").on("click", function(event) {  
            if (userPick == questions[i].validAnswer)  {
                $("#confirm1").attr("src", "assets/images/checkmark.jpg");
                    rightAnswers++
                    console.log("Number of right answers: " + rightAnswers);
            }   else   
                    $("#confirm1").attr("src", "assets/images/xmark.jpg");
                        wrongAnswers++
                            console.log("Number of wrong answers: " + wrongAnswers);
        });

        //  conditional statement for false button question 1
        $("#aFalse1").on("click", function(event) {
            if (userPick == questions[i].validAnswer)  {
                $("#confirm1").attr("src", "assets/images/checkmark.jpg");
                    rightAnswers++
                        console.log("Number of right answers: " + rightAnswers);
            }   else   
                    $("#confirm1").attr("src", "assets/images/xmark.jpg");
                        wrongAnswers++
                            console.log("Number of wrong answers: " + wrongAnswers);
        });

        //  conditional statement for true button question 2
        $("#aTrue2").on("click", function(event) {
            if (userPick == questions[i].validAnswer)  {
                $("#confirm2").attr("src", "assets/images/checkmark.jpg");
                    rightAnswers++
                        console.log("Number of right answers: " + rightAnswers);
            }   else   
                    $("#confirm2").attr("src", "assets/images/xmark.jpg");
                        wrongAnswers++
                            console.log("Number of wrong answers: " + wrongAnswers);
        });

        //  conditional statement for false button question 2                    
        $("#aFalse2").on("click", function(event) {
            if (userPick == questions[i].validAnswer)  {
                $("#confirm2").attr("src", "assets/images/checkmark.jpg");
                    rightAnswers++
                        console.log("Number of right answers: " + rightAnswers);
            }   else   
                    $("#confirm2").attr("src", "assets/images/xmark.jpg");
                        wrongAnswers++
                            console.log("Number of wrong answers: " + wrongAnswers);
        });

        //  conditional statement for true button question 3
        $("#aTrue2").on("click", function(event) {
            if (userPick == questions[i].validAnswer)  {
                $("#confirm2").attr("src", "assets/images/checkmark.jpg");
                    rightAnswers++
                        console.log("Number of right answers: " + rightAnswers);
            }   else   
                    $("#confirm2").attr("src", "assets/images/xmark.jpg");
                        wrongAnswers++
                            console.log("Number of wrong answers: " + wrongAnswers);
        });

        //  conditional statement for false button question 3                    
        $("#aFalse2").on("click", function(event) {
            if (userPick == questions[i].validAnswer)  {
                $("#confirm2").attr("src", "assets/images/checkmark.jpg");
                    rightAnswers++
                        console.log("Number of right answers: " + rightAnswers);
            }   else   
                    $("#confirm2").attr("src", "assets/images/xmark.jpg");
                        wrongAnswers++
                            console.log("Number of wrong answers: " + wrongAnswers);
        });

        //  conditional statement for true button question 4
        $("#aTrue3").on("click", function(event) {
            if (userPick == questions[i].validAnswer)  {
                $("#confirm3").attr("src", "assets/images/checkmark.jpg");
                    rightAnswers++
                        console.log("Number of right answers: " + rightAnswers);
            }   else   
                    $("#confirm3").attr("src", "assets/images/xmark.jpg");
                        wrongAnswers++
                            console.log("Number of wrong answers: " + wrongAnswers);
        });

        //  conditional statement for false button question 4                    
        $("#aFalse4").on("click", function(event) {
            if (userPick == questions[i].validAnswer)  {
                $("#confirm4").attr("src", "assets/images/checkmark.jpg");
                    rightAnswers++
                        console.log("Number of right answers: " + rightAnswers);
            }   else   
                    $("#confirm4").attr("src", "assets/images/xmark.jpg");
                        wrongAnswers++
                            console.log("Number of wrong answers: " + wrongAnswers);
        });
    } 
        // The on click events should execute the display answers function
        //  display answers function ends here        

        //  this on click event clears the current questions and answer graphics 
        //and calls the display questions function to replenish the questions
    $("#playAgain").on("click", function() { 
        $("#question1").empty()
        $("#confirm1").empty();
            $("#question2").empty()
            $("#confirm2").empty();
                $("#question3").empty()
                $("#confirm3").empty();
                    $("#question4").empty()
                    $("#confirm4").empty();
                        console.log("play again button was clicked");
    }); displayQuestions();    //  play again function ends here
});

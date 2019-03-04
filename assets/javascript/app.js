var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

//Timer
//  Set number to countdown from 30.
var number = 90;
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
//alert("Time's up", "Number of right answers: " + rightAnswers, "Number of wrong answers: " + wrongAnswers, "Please play again!");
}
//  timer code ends here

(function() {
    var myQuestions = [
        {
          question: "In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?",
          answers: {
            a: "William and Elizabeth",
            b: "Joseph and Catherine",
            c: "John and Mary",
            d: "George and Anne"
          },
          correctAnswer: "c"
        },
        {
          question: "When did the Liberty Bell get its name?",
          answers: {
            a: "when it was made, in 1701",
            b: "when it rang on July 4, 1776",
            c: "in the 19th century, when it became a symbol of the abolition of slavery",
            d: "none of the above"
          },
          correctAnswer: "c"
        },
        {
          question: "In the Roy Rogers -Dale Evans Museum, you will find Roy and Dales stuffed horses. Roy's horse was named Trigger, which was Dales horse?",
          answers: {
            a: "Buttermilk",
            b: "Daisy",
            c: "Scout",
            d: "Tulip"
          },
          correctAnswer: "a"
        },
        {
            question: "The Daniel Boon museum at the home where he died can best be described how?",
            answers: {
              a: "a log cabin in Kentucky",
              b: "a two-story clapboard house in Tennessee",
              c: "a four-story Georgian-style home in Missouri",
              d: "a three story brick house in Arkansas"
            },
            correctAnswer: "a"
          },
          {
            question: "Which of the following items was owned by the fewest U.S. homes in 1990?",
            answers: {
              a: "home computer",
              b: "compact disk player",
              c: "cordless phone",
              d: "dishwasher"
            },
            correctAnswer: "b"
          },
          {
            question: "Who holds the record for the most victories in a row on the professional golf tour?",
            answers: {
              a: "Jack Nicklaus",
              b: "Arnold Palmer",
              c: "Byron Nelson",
              d: "Ben Hogan"
            },
            correctAnswer: "c"
          },
          {
            question: "Who is third behind Hank Aaron and Babe Ruth in major league career home runs?",
            answers: {
              a: "Reggie Jackson",
              b: "Harmon Killebrew",
              c: "Willie Mays",
              d: "Frank Robinson"
            },
            correctAnswer: "c"
          },
          {
            question: "In 1990, in what percentage of U.S. married couples did the wife earn more money than the husband?",
            answers: {
              a: "8",
              b: "18",
              c: "38",
              d: "58"
            },
            correctAnswer: "b"
          },
          {
            question: "During the 1980s for six consecutive years what breed of dog was the most popular in the U.S.?",
            answers: {
              a: "cocker spaniel",
              b: "German shepherd",
              c: "Labrador retriever",
              d: "poodle"
            },
            correctAnswer: "a"
          },
          {
            question: "In 1985, five percent of U.S. households had telephone answering machines. By 1990 what percentage of homes had answering machines?",
            answers: {
              a: "10 percent",
              b: "15 percent",
              c: "31 percent",
              d: "51 percent"
            },
            correctAnswer: "c"
          },
          {
            question: "The first black American pictured on a U.S. postage stamp was who?",
            answers: {
              a: "Frederick Douglass",
              b: "Booker T. Washington",
              c: "3Louis Armstrong",
              d: "Joe Louis"
            },
            correctAnswer: "c"
          },
          {
            question: "What did the 'D' in 'D-Day' stand for?",
            answers: {
              a: "doom",
              b: "day",
              c: "Dwight (Eisenhower)",
              d: "Dunkirk"
            },
            correctAnswer: "b"
          },
          {
            question: "The Brownie Box Camera introduced by Eastman Kodak in 1900 had a retail price of what?",
            answers: {
              a: "$1",
              b: "$5",
              c: "$10",
              d: "$20"
            },
            correctAnswer: "a"
          },
          {
            question: "Which of these characters turned 40 years old in 1990?",
            answers: {
              a: "Charlie Brown",
              b: "Bugs Bunny",
              c: "Mickey Mouse",
              d: "Fred Flintstone"
            },
            correctAnswer: "a"
          },
          {
            question: "The Philadelphia mint started putting a 'P' mint mark on quarters when?",
            answers: {
              a: "1940",
              b: "1960",
              c: "1980",
              d: "never"
            },
            correctAnswer: "c"
          },
          {
            question: "Before becoming George Bush's Secretary of Defense, what was Dick Cheney's position?",
            answers: {
              a: "congressman from Wyoming",
              b: "governor of New Hampshire",
              c: "secretary of defense under Ronald Reagan",
              d: "senator from Oklahoma"
            },
            correctAnswer: "a"
          },
          {
            question: "When Mt. St. Helens erupted on May 18, 1980, how many people were killed?",
            answers: {
              a: "1",
              b: "57",
              c: "164",
              d: "218"
            },
            correctAnswer: "b"
          },
          {
            question: "In J. Edgar Hoover, what did the J stand for?",
            answers: {
              a: "James",
              b: "John",
              c: "Joseph",
              d: "Jeffrey"
            },
            correctAnswer: "b"
          },
          {
            question: "Florence Nightingale became known as 'the Lady With the Lamp' during which war?",
            answers: {
              a: "American Civil War",
              b: "Crimean War",
              c: "World War I",
              d: "World War II"
            },
            correctAnswer: "b"
          },
          {
            question: "What year was it that the Census Bureau first reported that a majority of new mothers  were remaining in the new job market?",
            answers: {
              a: "1968",
              b: "1978",
              c: "1988",
              d: "1998"
            },
            correctAnswer: "c"
          },
      ];

  
    function buildQuiz() {
      // we'll need a place to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // we'll want to store the list of answer choices
        const answers = [];
  
        // and for each available answer...
        for (letter in currentQuestion.answers) {
          // ...add an HTML radio button
          answers.push(
            `<label>
               <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
             </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="slide">
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
           </div>`
        );
      });
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          // if answer is wrong or blank
          // color the answers red
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove("active-slide");
      slides[n].classList.add("active-slide");
      currentSlide = n;
      
      if (currentSlide === 0) {
        previousButton.style.display = "none";
      } else {
        previousButton.style.display = "inline-block";
      }
      
      if (currentSlide === slides.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
      } else {
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
  
    // display quiz right away
    buildQuiz();
  
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    showSlide(0);
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
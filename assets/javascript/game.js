var startButton;
var time;
var intervalId;
var askQuestion;
var questionsLeft = 10;
var userInput = false;
var showAnswer;
var selectAnswer;
var correctAnswer;
var wrongAnswer;
var resetGame;
var submitAnswer;
var questions = [
    {
        question: "What year did Dolores Umbridge teach Harry at Hogwarts?",
        choices: ["4","5","6","7"],
        correct: "5"
    },
    {
        question: "What House was Susan Bones sorted into?",
        choices: ["Gryffindor","Slytherin","Hufflepuff","Ravenclaw"],
        correct: "Hufflepuff"
    },
    {
        question: "What shape does Remus take each month?",
        choices: ["Rabbit","Dog","Werewolf","Stag"],
        correct: "Werewolf"
    },
    {
        question: "How many members are there in Ron's immediate family?",
        choices: ["7","8","9","10"],
        correct: "9"
    },
    {
        question: "In The Half-Blood Prince, who did Harry set to spy on Draco Malfoy?",
        choices: ["Dean and Seamus","Neville and Trevor","Bill and Fleur","Dobby and Kreacher"],
        correct: "Dobby and Kreacher"
    },
    {
        question: "How did Moaning Myrtle die?",
        choices: ["Was eaten","Sword fight","Looked at a monster","Ate a monster"],
        correct: "Looked at a monster"
    },
    {
        question: "Hedwig is a...",
        choices: ["dog","owl","cat","toad"],
        correct: "owl"
    },
    {
        question: "How many positions per side are there in Quidditch?",
        choices: ["2","5","7","11"],
        correct: "7"
    },
    {
        question: "What is Dumbledore's full name?",
        choices: ["Albus Percival Wulfric Brian Dumbledore","Albus Wulfric Percival Brand Dumbledore","Albus Dumbledore","Gellert Grindlewald"],
        correct: "Albus Percival Wulfric Brian Dumbledore"
    },
    {
        question: "What is the name of the author of 'Magical Me'?",
        choices: ["Flitwick","Sprout","Lockhart","Brown"],
        correct: "Lockhart"
    }
];

$(document).ready(function() {

    $("#begin").click(function() {
        startGame()
    })
     
    function startGame(){
        $("#begin").remove();
        $("#upperTextbox").remove();
        $("#timerPlaceholder").html(time);
        $(".h1").remove();
        $("#submitAnswer").remove();
        askQuestion();
    }

    // function timer() {
        
    //     if (time === 0) {
    //         userInput = true;
    //         clearInterval(intervalId);
    //         showAnswer()
    //     }

    //     else if (userInput === true) {
    //         clearInterval(intervalId);
    //     }
        
    //     else {
    //         clearInterval(intervalId);
    //         intervalId = setInterval(decrement,1000);
    //     }
    // }

    // function decrement() {
    //     time--;
    //     $("#timerPlaceholder").html(time);
    //     if (time === 0) {
    //         clearInterval(intervalId);
    //     }
    // }

//     function showAnswer() {
//         $("#answerBank").html(questions[questionsLeft].choices[correct])
//     }
    
//     function askQuestion() {
//         userInput = false;
//         time = 10;
//         intervalId = setInterval(decrement,1000);

//         timer()    

//         $("#option1").show()
//         $("#option2").show()
//         $("#option3").show()
//         $("#option4").show()

//         correctAnswer = questions[questionsLeft].correct;
//         question = questions[questionsLeft].question;
//         // choices = questions[questionsLeft].choices[i];
//         // for (var i = 0; i < 4; i++);
//         //     $(".radio").html(questions[questionsLeft].choices[i])

//         $("#questionBank").html(question);

//         for (var i = 0; i < 4; i++) {
//             var choices = questions[questionsLeft].choices[i];
//             console.log(choices);
//             // $(".radio").append(choices[i]);
//             $("form").append("<div class= 'radio' id='option"+i + "'>" +
//                              "<label> <input type='radio' name='group' value="
//                              + questions[questionsLeft].choices[i] + "> &nbsp;&nbsp;"
//                              + questions[questionsLeft].choices[i] + "</label></div>");
 
//         }
//     }
//  })


/*
start game button is cliked, this triggers start game function
  start game function triggered
  game set up
game asks questions as long as there are still questions to ask / if questions left is not 0
  if the user runs out of timeout
    correct answer appears

    next question is asked (if there are questions left)
  or else the user answer the quetsion
    if answer is correct
      tell player they got it right
    else answer is wrong
      tell player they got it wrong
    correct answer is shown
    next question is asked (if there are questions left)


        */



  
  function ask() {
    console.log('asking');
  
    var outerDiv = $('<div class="outerDiv"></div>')
    for(let i=0; i < questions.length; i++) {
      var question = '<h1>' + questions[i].question + '</h1>';
      var form = $("<form></form>");
      var submitButton = $('<div><button id="submitAnswer" data-correct="' + questions[i].correct +'" type="submit">Submit</button></div>')
      var innerDiv = $('<div class="innerDiv"></div>');
      for(let j = 0; j < questions[i].choices.length; j++) {
  
        var option = $('<input type="radio" id="contactChoice"' + j + '"name="contact" value="'+ questions[i].choices[j] + '"><label for="contactChoice'+j+'">'+questions[i].choices[j]+'</label><br>');
  
        innerDiv.append(option);
      }
      form.append(innerDiv).append(submitButton)
    }
  
    outerDiv.append(question).append(form)
    $('#questionBank').append(outerDiv)
  }
  
  function checkAnswer() {
    console.log('check answer');
  }
  
  function showAnswer(correctAnswer) {
    var correctAnswer = correctAnswer;
    console.log('correctAnswer', correctAnswer);
  
    $('#questionBank').hide();
    $('#answerBank').append('<h1>'+correctAnswer+'</h1>')
  }

  for (var i = 0; i < questions.length; i++) {
    ask(); 
  
  }
  $(document).ready(function() {
    $('#questionBank').on('click', '#submitAnswer', function() {
      event.preventDefault()
  
      //check answer
      checkAnswer();
      //show answer
  
      var correctAnswer = $(this)[0].dataset.correct;
      showAnswer(correctAnswer);
  
    });
  })})
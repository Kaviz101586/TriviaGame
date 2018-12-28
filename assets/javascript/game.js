// var startButton;
// var time;
// var intervalId;
// var askQuestion;
// var questionsLeft = 10;
// var userInput = false;
// var showAnswer;
// var selectAnswer;
// var correctAnswer;
// var wrongAnswer;
// var resetGame;
// var submitAnswer;


// $(document).ready(function() {

//     $("#begin").click(function() {
//         startGame()
//     })
     
//     function startGame(){
//         $("#begin").remove();
//         $("#upperTextbox").remove();
//         $("#timerPlaceholder").html(time);
//         $(".h1").remove();
//         $("#submitAnswer").remove();
//         askQuestion();
//     }

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



  
  // function ask() {
  //   console.log('asking');
  
  //   var outerDiv = $('<div class="outerDiv"></div>')
  //   for(let i=0; i < questions.length; i++) {
  //     var question = '<h1>' + questions[i].question + '</h1>';
  //     var form = $("<form></form>");
  //     var submitButton = $('<div><button id="submitAnswer" data-correct="' + questions[i].correct +'" type="submit">Submit</button></div>')
  //     var innerDiv = $('<div class="innerDiv"></div>');
  //     for(let j = 0; j < questions[i].choices.length; j++) {
  
  //       var option = $('<input type="radio" id="contactChoice"' + j + '"name="contact" value="'+ questions[i].choices[j] + '"><label for="contactChoice'+j+'">'+questions[i].choices[j]+'</label><br>');
  
  //       innerDiv.append(option);
  //     }
  //     form.append(innerDiv).append(submitButton)
  //   }
  
  //   outerDiv.append(question).append(form)
  //   $('#questionBank').append(outerDiv)
  // }
  
  // function checkAnswer() {
  //   console.log('check answer');
  // }
  
  // function showAnswer(correctAnswer) {
  //   var correctAnswer = correctAnswer;
  //   console.log('correctAnswer', correctAnswer);
  
  //   $('#questionBank').hide();
  //   $('#answerBank').append('<h1>'+correctAnswer+'</h1>')
  // }

  // for (var i = 0; i < questions.length; i++) {
  //   ask(); 
  
  // }
  // $(document).ready(function() {
  //   $('#questionBank').on('click', '#submitAnswer', function() {
  //     event.preventDefault()
  
  //     //check answer
  //     checkAnswer();
  //     //show answer
  
  //     var correctAnswer = $(this)[0].dataset.correct;
  //     showAnswer(correctAnswer);
  
  //   });
  // })})


$("#begin").on("click", function () {
  $("#begin").remove();
  game.loadQuestion();
})

$(document).on("click",".choice-button",function(e){
  game.clicked(e);
  console.log(e);
})

$(document).on("click","#reset",function() {
  game.reset();
})

var questions = [
    {
      question: "What year did Dolores Umbridge teach Harry at Hogwarts?",
      choices: ["four","five","six","seven"],
      correctAnswer: "five",
      answerGif: "assets/images/umbridge.gif",
    },
    {
      question: "What House was Susan Bones sorted into?",
      choices: ["Gryffindor","Slytherin","Hufflepuff","Ravenclaw"],
      correctAnswer: "Hufflepuff", 
      answerGif:"assets/images/hufflepuff.webp"
    },
    {
      question: "What shape does Remus take each month?",
      choices: ["a rat","a dog","a werewolf","a stag"],
      correctAnswer: "a werewolf",
      answerGif:"assets/images/lupin.webp"
    },
    {
      question: "How many members are there in Ron's immediate family?",
      choices: ["seven","eight","nine","ten"],
      correctAnswer: "nine",
      answerGif:"assets/images/weasley.webp"
    },
    {
      question: "In The Half-Blood Prince, who did Harry set to spy on Draco Malfoy?",
      choices: ["Dean and Seamus","Neville and Trevor","Bill and Fleur","Dobby and Kreacher"],
      correctAnswer: "Dobby and Kreacher",
      answerGif:"assets/images/dobby.webp"
    },
    {
      question: "How did Moaning Myrtle die?",
      choices: ["she was eaten","she died in a sword fight","she looked at a basilisk","she ate a pygmy"],
      correctAnswer: "she looked at a basilisk",
      answerGif:"assets/images/myrtle.webp"
    },
    {
      question: "Hedwig is a...",
      choices: ["a dog","an owl","a cat","a toad"],
      correctAnswer: "an owl",
      answerGif:"assets/images/hedwig.webp"
    },
    {
      question: "How many positions per side are there in Quidditch?",
      choices: ["two","five","seven","eleven"],
      correctAnswer: "seven",
      answerGif:"assets/images/quidditch.webp"
    },
    {
      question: "What is Dumbledore's full name?",
      choices: ["Albus Percival Wulfric Brian Dumbledore","Albus Wulfric Percival Brand Dumbledore","Albus Dumbledore","Gellert Grindlewald"],
      correctAnswer: "Albus Percival Wulfric Brian Dumbledore",
      answerGif:"assets/images/dumbledore.webp"
    },
    {
      question: "What is the name of the author of 'Magical Me'?",
      choices: ["Flitwick","Sprout","Lockhart","Brown"],
      correctAnswer: "Lockhart",
      answerGif:"assets/images/lockhart.webp"
    }
];

var game = {
  questions: questions,
  currentQuestion:0,  
  counter: 10,
  correct:0,
  incorrect:0,
  countdown: function (){
    game.counter--;
    $("#upperTextbox").html(game.counter);
    if(game.counter <= 0) {
      console.log("TIME UP");
      game.timeUp();
    } 
  },
  loadQuestion: function () {

    $("upperTextbox").show();
    timer = setInterval(game.countdown, 1000);
    $("#questionBank").html('<h2>' + questions[game.currentQuestion].question + '</h2>')
    for (var i = 0; i<questions[game.currentQuestion].choices.length; i++) {
      console.log(questions);
      console.log(questions[game.currentQuestion]);
      console.log(questions[game.currentQuestion].choices)
      console.log(questions[game.currentQuestion].choices.length);
      $("#answerBank").append("<button class='choice-button' id='button-"+ i +"' data-name='"+questions[game.currentQuestion].choices[i]+"'>"+questions[game.currentQuestion].choices[i]+'</button>');
    }
  },
  nextQuestion: function (){
    game.counter = 10;
    $("#upperTextbox").html(game.counter);
    game.currentQuestion++;
    $("#answerBank").empty();
    $("#gifHolder").empty();
    game.loadQuestion();
  },
  timeUp: function () {
    clearInterval(timer);
    game.incorrect++;
    $("#answerBank").html("OUT OF TIME!");
    $("#answerBank").append("<br>The correct answer was " + questions[game.currentQuestion].correctAnswer);
    $("#gifHolder").append('<img src="'+questions[game.currentQuestion].answerGif+'"</img>');
    if(game.currentQuestion==questions.length-1) {
      setTimeout(game.results,5*1000);
      $("#answerBank").empty();
      $("#gifHolder").empty();
    }

    else {
      setTimeout(game.nextQuestion, 5*1000);
    }
  },
  results: function () {
    clearInterval(timer);
    $("#upperTextbox").hide();
    $("#answerBank").empty();
    $("#gifHolder").empty();
    $("#questionBank").empty();
    $("#answerBank").html("Completed!" + "<br>");
    $("#answerBank").append("Correct: " + game.correct + "<br>");
    $("#answerBank").append("Incorrect: " + game.incorrect + "<br>");
    $("#answerBank").append('<button id="reset">Try again?</button>');
  },
  clicked: function (e) {
    console.log("clicked!")
    clearInterval(timer);    
    console.log(e)  
    if($(e.currentTarget).data("name")==questions[game.currentQuestion].correctAnswer){
      game.answeredCorrect();
    }
    
    else {
      game.answeredIncorrect();
    }
  },
  answeredCorrect: function () {
    clearInterval(timer);
    game.correct++;
    $("#answerBank").html("YOU GOT IT RIGHT!");
    $("#answerBank").append("<br>The correct answer was " + questions[game.currentQuestion].correctAnswer);
    $("#gifHolder").append('<img src="'+questions[game.currentQuestion].answerGif+'"</img>');
    if(game.currentQuestion==questions.length-1){
      setTimeout(game.results,5*1000);
      $("upperTextbox").hide();

    }

    else {
      setTimeout(game.nextQuestion,5*1000);
    }
  },
  answeredIncorrect: function () {
    clearInterval(timer);
    game.incorrect++;
    $("#answerBank").html("YOU GOT IT WRONG! womp womp....");
    $("#answerBank").append("<br>The correct answer was " + questions[game.currentQuestion].correctAnswer);
    $("#gifHolder").append('<img src="'+questions[game.currentQuestion].answerGif+'"</img>');
    if(game.currentQuestion==questions.length-1){
      setTimeout(game.results,5*1000);
      $("upperTextbox").hide();
    }

    else {
      setTimeout(game.nextQuestion,5*1000);
    }
  },
  reset: function () {
    game.currentQuestion = 0;
    game.counter = 10;
    game.correct = 0;
    game.incorrect = 0;
    $("#answerBank").empty();
    $("#gifHolder").empty();
    game.loadQuestion();
  }
}





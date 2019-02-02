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
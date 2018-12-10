var startButton;
var time;
var intervalId;
var askQuestion;
var questionsLeft = 0;
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
        correct: 2
    },
    {
        question: "What House was Susan Bones sorted into?",
        choices: ["Gryffindor","Slytherin","Hufflepuff","Ravenclaw"],
        correct: 3
    },
    {
        question: "What shape does Remus take each month?",
        choices: ["Rabbit","Dog","Werewolf","Stag"],
        correct: 3
    },
    {
        question: "How many members are there in Ron's immediate family?",
        choices: ["7","8","9","10"],
        correct: 3
    },
    {
        question: "In The Half-Blood Prince, who did Harry set to spy on Draco Malfoy?",
        choices: ["Dean and Seamus","Neville and Trevor","Bill and Fleur","Dobby and Kreacher"],
        correct: 4
    },
    {
        question: "How did Moaning Myrtle die?",
        choices: ["Was eaten","Sword fight","Looked at a monster","Ate a monster"],
        correct: 3
    },
    {
        question: "Hedwig is a...",
        choices: ["dog","owl","cat","toad"],
        correct: 2
    },
    {
        question: "How many positions per side are there in Quidditch?",
        choices: ["2","5","7","11"],
        correct: 3
    },
    {
        question: "What is Dumbledore's full name?",
        choices: ["Albus Percival Wulfric Brian Dumbledore","Albus Wulfric Percival Brand Dumbledore","Albus Dumbledore","Gellert Grindlewald"],
        correct: 1
    },
    {
        question: "What is the name of the author of 'Magical Me'?",
        choices: ["Flitwick","Sprout","Lockhart","Brown"],
        correct: 3
    }
];

$(document).ready(function() {
    $("#option1").hide()
    $("#option2").hide()
    $("#option3").hide()
    $("#option4").hide()

    $("#begin").click(function() {
        startGame()
    })
     
    function startGame(){
        $("#begin").hide();
        $("#upperTextbox").hide();
        $("#timerPlaceholder").html(time);
        askQuestion();
    }

    function timer() {
        
        if (time === 0) {
            userInput = true;
            clearInterval(intervalId);
            showAnswer()
        }

        else if (userInput === true) {
            clearInterval(intervalId);
        }
        
        else {
            clearInterval(intervalId);
            intervalId = setInterval(decrement,1000);
        }
    }

    function decrement() {
        time--;
        $("#timerPlaceholder").html(time);
        if (time === 0) {
            clearInterval(intervalId);
        }
    }

    function showAnswer() {
        $("#answerBank").html(questions[questionsLeft].choices[correct])
    }
    
    function askQuestion() {
        userInput = false;
        time = 10;
        intervalId = setInterval(decrement,1000);

        timer()    

        $("#option1").show()
        $("#option2").show()
        $("#option3").show()
        $("#option4").show()

        correctAnswer = questions[questionsLeft].correct;
        question = questions[questionsLeft].question;
        // choices = questions[questionsLeft].choices[i];
        // for (var i = 0; i < 4; i++);
        //     $(".radio").html(questions[questionsLeft].choices[i])

        $("#questionBank").html(question);

        for (var i = 0; i < 4; i++) {
            var choices = questions[questionsLeft].choices[i];
            $(".radio").append(choices[i]);

        // $("#answerBank").html(choices[i])
        // $("#option1").html(questions[questionsLeft].choices[0]).attr("value", questions[questionsLeft].choices[0]);
        // $("#option2").html(questions[questionsLeft].choices[1]).attr("value", questions[questionsLeft].choices[1]);
        // $("#option3").html(questions[questionsLeft].choices[2]).attr("value", questions[questionsLeft].choices[2]);
        // $("#option4").html(questions[questionsLeft].choices[3]).attr("value", questions[questionsLeft].choices[3]);
        // $("answerBank").html(questions[questionsLeft].choices[i]);
          
        }}})
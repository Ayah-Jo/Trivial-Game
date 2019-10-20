
/* Pseudo Code: Ayah
A basic Multiple Choice Trivia Game
 
Click to Start
Timer begins at 180 seconds and countdown
Player goes through all 10 questions
player can only guess one answer per question
Once completed, player submit's answers
HTML is updated with users score
Score includes: time spent, answers correct, and answers wrong */

// --------------------------------------------------------------- 

var questions = [{
    ques: "What country did Mussolini lead?",
    ans: ["Italy", "France", "United Kingdom", "Germany"],
    name: "One",
    correct: "Italy",
    divClass: ".One"
},
{
    ques: "Of what nation was Joseph Stalin the leader?",
    ans: ["Soviet Union", "Germany", "Italy", "Japan"],
    name: "Two",
    correct: "Soviet Union",
    divClass: ".Two"
},
{
    ques: "What was the term for the British allowing Hitler to have the Sudetenland later referred as?",
    ans: ["Appeasement", "The Munich Peace Plan", "The Great Deal", "Hitler's Magnificent Promise"],
    name: "Three",
    correct: "Appeasement",
    divClass: ".Three"
},
{
    ques: "Who became the dictator of Germany and led that country into WWII?",
    ans: ["Winston Churchill", "Benito Mussolini", "Adolf Hitler", "Jaques Chirac"],
    name: "Four",
    correct: "Adolf Hitler",
    divClass: ".Four"
},
{
    ques: "Who was Benito Mussolini? The fascist ruler of?",
    ans: ["Italy", "Germany", "England", "France"],
    name: "Five",
    correct: "Italy",
    divClass: ".Five"
},
{
    ques: "Who was the dictator of the Soviet Union during WWII?",
    ans: ["Adolf Hitler", "Joseph Stalin", "Benito Mussolini ", "Mobutu Cesse Ceko"],
    name: "Six",
    correct: "Joseph Stalin",
    divClass: ".Six"
},
{
    ques: "Who founded the Fascist Party in Italy?",
    ans: ["Adolf Hitler", "Benito Mussolini", "Count Cavour", "Joseph Stalin"],
    name: "Seven",
    correct: "Benito Mussolini",
    divClass: ".Seven"
},
{
    ques: "Which of the following nations DID NOT fall under the control of a totalitarian government during the interwar years?",
    ans: ["France", " Germany", "Italy", "Russia"],
    name: "Eight",
    correct: "France",
    divClass: ".Eight"
},
{
    ques: "This man was worshiped as a living god in Japan and was seen as a descendant of the sun:",
    ans: ["Hideki Tojo", "Hirohito", "Mao Tse-tung", "Chai Kai-Shek"],
    name: "Nine",
    correct: "Hirohito",
    divClass: ".Nine"
},
{
    ques: " Which political party was Joseph Stalin a member of?",
    ans: ["ABolshevik (communist) party", "Soviet Union Fascist Party", "The Lenin Party", "Blackshirts"],
    name: "Ten",
    correct: "ABolshevik (communist) party",
    divClass: ".Ten"
}
] // end questions object

var labels = ["first", "second", "third", "forth"];

// click to start then display quesions
var startGame = $("#start-btn").on('click', function() {
$(this).parent().hide();
$('.container').show();
countdown(180);
questionDisplay();
});

// function for displaying questions
var questionDisplay = function() {
$(".questions :not('#sub-but')").empty();
// loops through the 10 questions 
for (var j = 0; j < 10; j++) {
$('.questions').prepend('<div class="' + questions[j].name + '"></div>');
$(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
// loops through answers for each radio button
for (var i = 0; i <= 3; i++) {
    $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
}
$('.questions').prepend('<hr />');
}
}


// function for countdown timer
var countdown = function(seconds) {

var timer = setInterval(function() {
seconds = seconds - 1;
$("#time-remain").html(seconds);

if (seconds <= 0) {
    $('.container').fadeOut(500);
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

    // loop through correctArray & radioName to match html elements & answers
    for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
            console.log("this is correct! number:" + i)
        } else {
            wrongAnswers++;
            console.log("this is wrong! number:" + i)
        };
    }
    $('#correctTimesUp').append(correctAnswers);
    // display wrongAnswers
    $('#wrongTimesUp').append(wrongAnswers);
    $('#timesUp').fadeIn(1000).show();

    // alert("Times Up!");
    clearInterval(timer);
    return;
}
}, 1000);

// click event for submit button to stop timer
$('#sub-but').on('click', function() {
clearInterval(timer);
})
}; // end countdown


// function to grade quiz once submit button is clicked
var gradeQuiz = $('#sub-but').on('click', function() {

var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;

// loop through correctArray & radioName to match html elements & answers
for (var i = 0; i < 10; i++) {

if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

    correctAnswers++;
} else {
    wrongAnswers++;
};
};

// once submit is clicked...
// tests
// stop timer
countdown();
// fade out questions
$('.container').fadeOut(500);
// show answerScreen
$('#answerScreen').show();
// display correctAnswers
$('#correctScreen').append(correctAnswers);
// display wrongAnswers
$('#wrongScreen').append(wrongAnswers);

}); // end gradeQuiz
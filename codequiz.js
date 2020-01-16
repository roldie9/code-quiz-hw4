var startQuizBtn = document.querySelector("#startQuiz");
var highscoresBtn = document.querySelector("#highscores");

function startTimer (){
    var timer = select("#timer");
    var result = setInterval(function(){
        timerEl.textContent = "Time left: " + countdown--;
        if (countdown <= 0){
            clearInterval(result);
        } 
       }, 1000);
};


var questions = [
    { 
        title: "How many states make up the United States of America?"
        choices: ["(a) 13","(b) 50", "(c) 48"]
        answer: "(b) 50"
    },
    {
        title: "Who won the College Football National Championship 2020?"
        choices:  ["(a)Alabama", "(b)LSU", "(c)University of Texas"]
        answer: "(b)LSU" 
    },
    {
        title: "Which of the following is not like the other?"
        choices: ["(a)Pikachu", "(b)Lionel Messi", "(c)Lebron James"]
        answer: "(a)Pikachu"          
    },
    {
        title: "Is Lil Wayne the best rapper of all time?"
        choices: ["(a)Meh", "(b)Absolutely","(c)Yes, but click B"]
        answer: "(b)Absolutely"
    },
]
var score = 0;

for (var i=0; i < questions.length; i++){
    var input = window.prompt(questions[i].title)
    if(input == questions[i].choices){
        score++;
    } else{}
}



function startQuiz(){
    var startQuiz = document.getElementById("#startQuiz");

    startQuiz.select();
}

startQuizBtn.addEventListener("click", questions);
highscoresBtn.addEventListener("click", Highscores);

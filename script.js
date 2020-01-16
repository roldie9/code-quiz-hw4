function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().title;

        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for (var i =0; i< choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

function showScores() {
    var quizOverHtml = "<h1>Result</h1>";
        quizOverHtml += "<h2 id='score'> Your score: " + quiz.scoreCount + "</h2>";
};

var questions = [ 
        new question("How many states make up the United States of America?", ["(a) 13","(b) 50", "(c) 48"], "(b) 50")

        new question("Who won the College Football National Championship 2020?", ["(a)Alabama", "(b)LSU", "(c)University of Texas"], "(b)LSU")
    
        new question("Which of the following is not like the other?", ["(a)Pikachu", "(b)Lionel Messi", "(c)Lebron James"], "(a)Pikachu")
    
        new question("Is Lil Wayne the best rapper of all time?", ["(a)Meh", "(b)Absolutely","(c)Yes, but click B"], "(b)Absolutely")
];

var quiz = new quiz(questions);

populate();
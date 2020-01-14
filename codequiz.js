var questions = [
    { 
        prompt: "How many states make up the United States of America?\n(a) 13\n(b) 50\n(c) 48 \n(d) I forgot"
        answer: "b"
    },
    {
        prompt: "Who won the College Football National Championship 2020?\n(a) Alabama\n(b) LSU\n(c) University of Texas \n(d) I forgot"
        answer: "b"          
    },
    {
        prompt: "Which of the following is not like the other?\n(a) Pikachu\n(b) Lionel Messi\n(c) Lebron James \n(d) I don't know sports, but the asnwer is A"
        answer: "a"          
    },
    {
        prompt: "Is Lil Wayne the best rapper of all time?\n(a) Meh\n(b) Absolutely\n(c) Yes, but click B \n(d) I'm not cultered, sorry."
        answer: "b"          
    },
]
var score = 0;

for (var i=0; i < questions.length; i++){
    var input = window.prompt(questions[i].prompt)
    if(input == questions[i].answer){
        score++;
    } else{}
}

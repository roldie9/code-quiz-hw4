function quiz(questions) {
    this.scoreCount = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionIndex;
}

quiz.prototype.guess = function(answer) {
    this.questionIndex++;

    if(this.getQuestionIndex().correctAnswer(answer)) {
        this.scoreCount++
    }
}


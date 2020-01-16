function question (title, choices, answer){
    this.title = title;
    this.choices = choices;
    this.answer = answer;
}

question.prototype.correctanswer = function(choice) {
    return choice === this.answer;
}

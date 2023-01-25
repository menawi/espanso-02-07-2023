// Math Practice JS.js

// 📌 VARIABLES

// 📍BUTTON CLASS
class Button {
  constructor(name) {
    this.name = name;
  }
}

// 📍START AND SUBMIT BUTTONS
const start_game = new Button("start_game");
const submit_answer = new Button("submit_answer");

// 📍SCORE
const score = 0;

// 📍QUESTIONS

// 

class Questions{
  constructor(question, answer) {
    this.question = question
    this.answer = answer
  }
}

const Q1 = new Questions('what is 2+2', 4);
const Q2 = new questions('what is 5+5', 10)
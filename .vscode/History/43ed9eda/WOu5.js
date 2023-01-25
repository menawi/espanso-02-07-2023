// Math Practice JS.js

// 📌 VARIABLES

// 📍BUTTON CLASS
class Button{
  constructor(name){
  this.name=name}
}

// 📍START AND SUBMIT BUTTONS
const start_game = new Button('start_game')
const submit_answer = new Button('submit_answer')

// 📍SCORE
const score  = 0

// 📍QUESTIONS

class Questions_Array{
  constructor(question, answer){
    this.question = question
    this.answer = answer
  }
}
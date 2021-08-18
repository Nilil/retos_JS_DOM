"use strict";

var randomAnswer;
var userAnswer;
var count = 0;

var randomNumber = function randomNumber() {
  randomAnswer = Math.ceil(Math.random() * 20);
  return randomAnswer;
};

var userInput = function userInput() {
  userAnswer = prompt("Adivina el n\xFAmero entre 1 y 20");
  return userAnswer;
};

var moreOrLess = function moreOrLess() {
  if (userAnswer < randomAnswer) {
    console.log("".concat(userAnswer, " es menor a la respuesta"));
  } else if (userAnswer > randomAnswer) {
    console.log("".concat(userAnswer, " es mayor a la respuesta"));
  } else if (userAnswer == randomAnswer) {
    console.log("\xA1Adivinaste! ".concat(randomAnswer, " es la soluci\xF3n"));
  }
};

var counter = function counter() {
  if (userAnswer != randomAnswer) {
    count += 1;
    console.log("Es tu intento: ".concat(count));
  } else if (userAnswer == randomAnswer) {
    console.log("Adivinaste con ".concat(count, " intentos"));
  }
};

randomNumber();

do {
  userInput();
  moreOrLess();
  counter();
} while (userAnswer != randomAnswer);
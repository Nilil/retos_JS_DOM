let randomAnswer;
let userAnswer;
let count = 0;

const randomNumber = () => {
  randomAnswer = Math.ceil(Math.random() * 20);
  return randomAnswer;
}

const userInput = () => {
  userAnswer = prompt(`Adivina el número entre 1 y 20`)
  return userAnswer;
}

const moreOrLess = () => {
  if (userAnswer < randomAnswer) {
      console.log(`${userAnswer} es menor a la respuesta`);
    } else if (userAnswer > randomAnswer) {
      console.log(`${userAnswer} es mayor a la respuesta`);
    } else if (userAnswer == randomAnswer){
      console.log(`¡Adivinaste! ${randomAnswer} es la solución`);
    }
}

const counter = () => {
  if (userAnswer != randomAnswer) {
      count += 1;
      console.log(`Es tu intento: ${count}`);
    } else if (userAnswer == randomAnswer){
      console.log(`Adivinaste con ${count} intentos`);
    }
}

randomNumber()

do {
  userInput();
    moreOrLess();
    counter();
  } while (userAnswer != randomAnswer);
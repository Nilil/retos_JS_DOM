// Variables
const FinalNumber = 5;
const InitialNumber = 1;
let counter = 1;
let userNumber;
let difference;

// Funciones
const userInput = () => userNumber = prompt(`Empezamos por ${InitialNumber}, agrega una unidad a la cuenta.`);

const differenceInput = () => {
  difference = FinalNumber - userNumber;
  console.log(`Vamos en el ${userNumber}, faltan ${difference}`);
}

const counterValidation = () => {
  if (userNumber != counter) {
    console.log(`¡Te estas saltando numeros!`);
  } else if (userNumber == counter) {
    counter += 1;
  }
}

const checkRange = () => {
  if (userNumber > FinalNumber || userNumber < InitialNumber) {
    console.log(`Estas fuera de los rangos del conteo, vamos de ${InitialNumber} a ${FinalNumber} :(`);
  }
};

// Ejecucion
console.log(`Ayudame a contar hasta ${FinalNumber} de ${counter} en ${counter}`);

while ((counter - 1) != FinalNumber) {
  userInput();
  counterValidation();
  differenceInput();
  checkRange();
}

console.log(`Gracias por tu ayuda ;)`);
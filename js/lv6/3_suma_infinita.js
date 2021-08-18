let number1;
let number2;
let numberSum;
let newNumber;

let requestNumbers = () => {
  number1 = parseInt(prompt("Introduce el primer número"));
  number2 = parseInt(prompt("Introduce el segundo número"));
  numberSum = number1 + number2;
  return numberSum;
}

let addNumber = () => {
  newNumber = parseInt(prompt("¿Deseas agregar un nuevo número? / 0 = Salir"));
  return newNumber;
}

requestNumbers();

while (newNumber != 0) {
  addNumber();
  numberSum += newNumber;
}

console.log(`La suma total es de: ${numberSum}`);
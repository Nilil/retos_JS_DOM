/* 1 - El usuario ingresa un #
2 - Se suma ese valor hasta llegar al limite
3 - Muestra valores de sumas y cuantas veces se repite */

let total = 0;
const limit = 50;
let newValue = prompt("Introduce un solo digito (0-9)");

let sumValues = (total, newValue) => {
  while(total <= limit){
    total += (parseInt(newValue));
    if (total <= limit) {
      console.log(total);
    } else {
      console.log(`Se llegó al limite de ${limit}`);
    }
  }
};

if (newValue >= 0 && newValue <= 9) {
  console.log(`Tu valor es de ${newValue}`);
  sumValues(total, newValue);
} else {
  console.log(`Introduce un valor entre 0-9`);
}
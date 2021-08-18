let listName = [];
let i;
let exit = 0;

let addName = () => {
  listName.push(prompt("¿Añade otro nombre a la lista de invitados? / ENTER = Salir"));
  for (i = 1; i < listName.length; i++) {}

  return listName;
}

let exitList = () => {
  exit = prompt('Salir = 1')
  if (exit == 1) {
    exit = 1
  }
}

while (exit != 1) {
  addName()
  console.log(`Es el invitado ${i}`);
  exitList()
}

console.log(`Tiene un total de ${i} invitados`);
console.log(`Tus invitados son: ${listName}`);
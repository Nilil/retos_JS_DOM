class Multiplication{
  constructor () {
    this.userNumber = prompt(`Introduce el valor a ocupar`);
  }

  multiplyCicle(newValues){
    for (let i = 1; i < 11; i++) {
      newValues = this.userNumber * i;
      console.log(`${i} X ${this.userNumber} = ${newValues}`);
    }
  }

}

const userData = new Multiplication();
userData.multiplyCicle()
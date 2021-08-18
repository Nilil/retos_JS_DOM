class Countdown{
  constructor(){
    this.userInput = parseInt(prompt(`Ingresa el limite para iniciar la cuenta a 0`));
    this.finalValue = 0;
  }

  evaluate(){
    if (this.userInput > this.finalValue) {
      this.down()
    } else if (this.userInput < this.finalValue) {
      this.up()
    }
  }

  down(){
    for (let i = this.userInput; i >= this.finalValue; i--) {
      console.log(i);
    }
  }

  up(){
    for (let j = this.userInput; j <= this.finalValue; j++) {
      console.log(j);
    }
  }
}

const COUNT = new Countdown();
COUNT.evaluate();
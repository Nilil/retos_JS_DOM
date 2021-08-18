class Line {
  constructor () {
    this.startPoint = 0;
    this.endPoint = parseFloat(prompt("¿Cuál será el valor final de la linea?"));
    this.positiveOrnegative = prompt("¿Será positivo o negativo tu valor?");
  }

  evaluate(){
    if (this.positiveOrnegative >= 1) {
      this.down()
    } else if (this.positiveOrnegative <= -1) {
      this.up()
    }
  }

  down(){
    for (let i = this.endPoint; i >= this.startPoint; i--) {
      console.log(i);
    }
  }

  up(){
    for (let j = this.endPoint; j <= this.startPoint; j++) {
      console.log(j);
    }
  }

}

const FIRST_LINE = new Line();

FIRST_LINE.evaluate();
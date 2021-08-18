class Acronym {
  constructor(){
  this.userInput = prompt(`Escribe una palabra`);
  this.repeatItself = parseInt(prompt(`¿Cuantás veces deseas repetirlo?`));
  }

  rearrangeInput(showWord){
    for (let j = 0; j < this.repeatItself; j++) {
      console.log('');
      for (let i = 0; i < this.userInput.length; i++) {
        showWord = this.userInput[i];
        console.log(showWord);
      }
    }
  }
}

const USER_WORDS = new Acronym();
USER_WORDS.rearrangeInput();
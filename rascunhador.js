// Objeto: Construtor
function Filho(fator, grana, signo, idade) {
  this.idade = idade;
  this.signo = signo;
  this.grana = grana;
  this.fator = fator;
  this.mesada = function () {
    return (this.idade / this.fator) * this.grana;
  }
}

// Objeto: Fabrica
function filho(fator, grana, signo, idade) {
  return {
    fator,
    grana,
    idade,
    signo,
    mesada: function () {
      return (this.idade / this.fator) * this.grana;
    }
  }
}

// Objeto: Classe
class Humano {
  constructor(raca, nacionalidade, sexo) {
    this.raca = raca;
    this.nacionalidade = nacionalidade;
    this.sexo = sexo;
  }
  ola() {
    console.log(`Welcome from ${this.raca}`);
  }
}


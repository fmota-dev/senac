// Questão 1

function ehMaior(numero1, numero2, numero3) {
  if (numero1 > numero2 && numero1 > numero3) {
    return 'O número 1 é o maior';
  } else if (numero2 > numero1 && numero2 > numero3) {
    return 'O número 2 é o maior';
  } else if (numero3 > numero1 && numero3 > numero2) {
    return 'O número 3 é o maior';
  } else if (numero1 === numero2 && numero1 !== numero3) {
    return 'O número 1 e o número 2 são iguais e maiores que o número 3';
  } else if (numero1 === numero3 && numero1 !== numero2) {
    return 'O número 1 e o número 3 são iguais e maiores que o número 2';
  } else if (numero2 === numero3 && numero2 !== numero1) {
    return 'O número 2 e o número 3 são iguais e maiores que o número 1';
  } else {
    return 'Os números são iguais';
  }
}

console.log(ehMaior(5, 5, 3));


// Questão 2 

function verificarIdade(anoNascimento) {
  let idade = new Date().getFullYear() - anoNascimento;

  if (idade < 14) {
    return 'Você é uma criança';
  } else if (idade >= 14 && idade < 18) {
    return 'Você é um adolescente';
  } else if (idade >= 18 && idade < 60) {
    return 'Você é um adulto';
  } else {
    return 'Você é um idoso';
  }
}

console.log(verificarIdade(2002));

// Questão 3 
    
  function verificarDia(dia) {
    dia = dia.toLowerCase();
    switch (dia) {
    case 'sábado':
    case 'domingo':
      return 'Descanso';
    default:
      return 'Estudo';
    }
  }

verificarDia('segunda-feira');

// Questão 4 

function verificarTurno() {
  let hora = new Date().getHours();

  if (hora >= 6 && hora < 12) {
    return 'Turno da manhã';
  } else if (hora >= 12 && hora < 18) {
    return 'Turno da tarde';
  } else {
    return 'Turno da noite';
  }
}

console.log(verificarTurno());

module.exports = { ehMaior, verificarIdade, verificarDia, verificarTurno };


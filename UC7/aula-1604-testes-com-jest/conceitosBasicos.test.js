const functions = require('./conceitosBasicos');


test('Testando a função ehMaior', () => {
    expect(functions.ehMaior(1, 2, 3)).toBe('O número 3 é o maior');
});

test('Testando a função verificarIdade', () => {
    expect(functions.verificarIdade(2002)).toBe('Você é um adulto');
});

test('Testando a função verificarDia', () => {
    expect(functions.verificarDia('segunda-feira')).toBe('Estudo');
});

test('Testando a função verificarTurno', () => {
    expect(functions.verificarTurno()).toBe('Turno da noite');
});
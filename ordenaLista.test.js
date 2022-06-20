const ordenaLista = require('./ordenaLista');

test('Test: Primeira Letra diferente', () => {
  expect(ordenaLista(['zebra','calice','borboleta'], 0)).toBe(['borboleta','calice','zebra']);
});

test('Test: Primeira Letra igual', () => {
  expect(ordenaLista(['abc','azb','acq'], 0)).toBe(['abc','acq','azb']);
});

test('Test: Ate encontrar a letra diferente', () => {
  expect(ordenaLista(['abct','abcd','abce'], 0)).toBe(['abcd','abce','abct']);
});
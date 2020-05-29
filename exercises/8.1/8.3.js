let assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
assert.equal(sum(4,5),9,'O resultado tem que ser 9');
assert.equal(sum(0,0),0,'Soma tem que ser 0');


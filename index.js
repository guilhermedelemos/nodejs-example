const sum = require('./math/sum');
const exp = require('./math/exp');

console.log('Node.js Example');

const sumResult = sum(1, 1);
console.log(`1 + 1 = ${sumResult}`);

const expResult2 = exp(2);
console.log(`2^2 = ${expResult2}`); // Looks ok

const expResult3 = exp(3);
console.log(`3^2 = ${expResult3}`); // Wait, what?

// let + const
// Destructuring
// Object properties
// Template strings
// Symbol
// Arrow functions 

//old way
function add(a, b) {
    return a + b;
}

//new way
const add2 = (a, b) => a + b;

//console.log
add(2,3)
5
add2(2,3)
5

//Compose
// The act of putting two functions together to form a third function where the output of one function is the input of the other??

const compose = (f, g) => (a) => f(g(a));

const add2 = (x) => x + 2;

const multiplyBy3 = (y) =>  y * 3; 

const moreMath = compose(add2, multiplyBy3);
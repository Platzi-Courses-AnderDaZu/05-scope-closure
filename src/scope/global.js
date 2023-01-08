// Variables

var a; // declarada
var b = 'b'; // declarada - asignación
b = 'bb' // reasignación
var a = 'aa'; // redeclaración

// global scope
var fruit = 'apple'; // global
console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    country = 'Colombia'; // al no declarar la variable dentro de la función, esta toma el scope como global
    console.log(country);
}

countries();
console.log(country);
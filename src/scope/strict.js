'use strict';

const usuario = {
    name: 'Ander',
    greeting: () => { // forma no recomendada
        console.log(`Hello 1 ${usuario.name}`);
    },
    greeting2: function () { 
        console.log(`Hello 2 ${this.name}`); // forma correcta
        console.log(`Hello 2 ${usuario.name}`); // forma para que corra bien las funciones libres
    }
}

const greeting = usuario.greeting2;

greeting(); // función libre -> cannot read of undenfined (readeing 'name')

car = 'Mazda';
console.log(car); // car is not definied
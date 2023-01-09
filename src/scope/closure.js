// Ejemplo 1

    function contar()
    {
        let cont = 0;
    
        return function sumar()
        {
            cont++;
            console.log(cont);
        }
    }

    const aumento = contar();
    aumento();
    aumento();
    aumento();
    aumento();
    aumento();

    const aumento2 = contar();
    aumento2();
    aumento2();
    aumento2();
// Fin ejemplo 1

// Ejemplo 2
function imprimir(name)
{
  const saludo = `Hi ${name}`;
  return {
    como_esta: function(){
      console.log(`${saludo}, Como vas?`);
    },
    tiene_dinero: function(){
      console.log(`${saludo}, Tiene dinero?`);
    },
    anios: function(anio){
      console.log(`${saludo}, tienes ${anio} años?`);
    }
  }
}

const saludar = imprimir('Ander');

saludar.anios(20);
saludar.como_esta();
// FIn ejemplo 2

// reto
function suma(first) {
    return function secondSumea(second = 0) {
        return first + second;
    }
}

const result = suma(5);
console.log(result(6));

const result2 = suma(5)(2);
console.log(result2);
// fin reto

// Ejemplo 3
const mensajeBase = 'Total coins ahorrados para ';
function moneyBox(username) 
{
    let sumaCoins = 0;
    
    return function contarCoins(coins) 
    {
        sumaCoins += coins;
        console.log(`${mensajeBase}${username}: ${sumaCoins}`);   
    }
}

const ahorroJuan = moneyBox('Juan');
ahorroJuan(5);
ahorroJuan(-10);
ahorroJuan(40);

const ahorroPedro = moneyBox('Pedro')(100);
// Fin ejemplo 3

// Reto 2
function createPetList() 
{
    let petList = [];
    
    return function addPetToList(pet) 
    {
        if ( pet ) 
        {
            petList.push(pet);
        }
        
        return petList; 
    }    
}
const myPetList = createPetList();

myPetList("michi");

myPetList("firulais");

console.log(myPetList());
// Fin Reto 2
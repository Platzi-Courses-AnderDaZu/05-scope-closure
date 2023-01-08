function fruits() 
{
    if (true) 
    {
        var fru1 = 'apple'; // function scope
        let fru2  = 'banana'; // block scope
        const fru3 = 'pear'; // block scope
        console.log(`Fru 1.1: ${fru1}`);
        console.log(`Fru 2.1: ${fru2}`);
        console.log(`Fru 3.1: ${fru3}`);
    }    
    console.log(`Fru 1.2: ${fru1}`);
    fru1 = 'pineapple';
    console.log(`Fru 1.2.1: ${fru1}`);
    console.log(`Fru 2.2: ${fru2}`);
    console.log(`Fru 3.2: ${fru3}`);
}
fruits();
console.log(`Fru 1.3: ${fru1}`);
console.log(`Fru 2.3: ${fru2}`);
console.log(`Fru 3.3: ${fru3}`);
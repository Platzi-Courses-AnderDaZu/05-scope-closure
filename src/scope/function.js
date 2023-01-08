// function scope
function greeting() {
    let userName = 'Ander';
    console.log(userName);

    if (userName) {
        console.log(`Hello ${userName}`);
    }
}

greeting();
console.log(userName);
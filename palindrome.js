const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let inputCounter = 0;
const mainFunction = () => {
    rl.question('Dime un palindromo: ', (input) => {
        const esPalindromo = checkPalindrome(input);
        inputCounter++;
        if(esPalindromo) {
            console.log(`${input} es un palindromo`);
        } else {
            console.log(`${input} no es un palindromo`);
        }
        if(inputCounter < 2) {
            mainFunction();
        } else if (inputCounter >= 2) {
            rl.close();
        }
    })
}

const checkPalindrome = (string) => {
    const sanitizaCadena = string.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const revierteCadena = sanitizaCadena.split('').reverse().join('').toLowerCase();
    return sanitizaCadena === revierteCadena;
}

mainFunction();
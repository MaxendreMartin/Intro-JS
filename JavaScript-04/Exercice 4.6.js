const readlineSync = require("readline-sync");

function factorial(a) {
    if (a === 0) {
        return 1;
    }
    return a * factorial(a - 1);
}

console.log("Factorielle de 5 = " + factorial(5));
console.log("Factorielle de 9 = " + factorial(9));
console.log("Factorielle de 13 = " + factorial(13));

const readlineSync = require("readline-sync");

function rand10() {
    return Math.floor(Math.random() * 10) + 1;
}

/**Ce programme permet de gégnérer un chiffre aléatoirement entre 1 et 10
 * @return {number} de 1 à 10
 */

function multiRand(n) {
    let multi = [];
    for (let i = 0; i < n; i++) {
        multi.push(rand10());
    }
    return multi;
}

/**Ce programme permet de gégnérer une liste de chiffres aléatoirement entre 1 et 10
 * @return {number} tableau
 * @param {number} n nombre de chiffres générer aléatoirement
 */

function average(arr) {
    let m = 0;
    for (e of arr) m += e;
    return m / arr.length;
}
/**
 * @return {number} moyenne
 */

function min(arr) {
    return Math.min(...arr);
}
/**
 * @returns {number} minimum des nombres
 */

function max(arr) {
    return Math.max(...arr);
}
/**
 * @returns {number} maximum des nombres
 */

let nombre = new Number(
    readlineSync.question("Combien voulez vous de nombres entre 1 et 10? ")
);
let ran = multiRand(nombre);

console.log("Voici la liste de nombre générer aléatoirement:" + ran);
console.log("Voici la moyenne: " + average(ran));
console.log("Voici le minimum: " + min(ran));
console.log("Voici le maximum " + max(ran));

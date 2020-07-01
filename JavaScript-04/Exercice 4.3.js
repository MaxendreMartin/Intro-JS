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

let nombre = new Number(
    readlineSync.question("Combien voulez vous de nombres entre 1 et 10? ")
);

console.log("Voici la liste de nombre générer aléatoirement: ");
for (e of multiRand(nombre)) console.log(e);

/**Ce programme permet de gégnérer une liste de chiffres aléatoirement entre 1 et 10
 * @return {number} tableau
 * @param {number} n nombre de chiffres générer aléatoirement
 */

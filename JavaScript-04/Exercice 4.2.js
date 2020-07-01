const readlineSync = require("readline-sync");

function rand10(min, max) {
    return Math.floor(Math.random() * 10) + 1;
}
console.log(rand10());

/**Ce programme permet de gégnérer un chiffre aléatoirement entre 1 et 10
 * @return {number} de 1 à 10
 */

const readlineSync = require("readline-sync");

/*Exercice 4.1*/
function calcSurface(long, lar) {
    return long * lar;
}
let long = new Number(
    readlineSync.question("Donne la longueur du rectangle: ")
);
let lar = new Number(readlineSync.question("Donne la largeur du rectangle: "));
let air = calcSurface(long, lar);

console.log("Voici la surface du rectangle: " + air);
/**Ce programme va me permettre de calculer la surface d'un rectangle
 * @param {number} longueur
 * @param {number} largeur
 * @return {number} Surface du rectangle
 */

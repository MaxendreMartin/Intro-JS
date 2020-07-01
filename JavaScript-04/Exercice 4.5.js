const readlineSync = require("readline-sync");

function calcDistance(ax, bx, ay, by) {
    let a = ax - bx;
    let b = ay - by;
    return Math.sqrt(a * a + b * b);
}

let ax = new Number(readlineSync.question("Donne moi la coordonnée x de  A: "));
let bx = new Number(readlineSync.question("Donne moi la coordonnée x de B: "));
let ay = new Number(readlineSync.question("Donne moi la coordonnée y de A: "));
let by = new Number(readlineSync.question("Donne moi la coordonnée y de B: "));

console.log("La distance entre A et B est: " + calcDistance(ax, bx, ay, by));

/**
 * @return théorème de pythagore
 * @param {number} a l'axe x de a et b
 * @param {number} b l'axe y de a et b
 */

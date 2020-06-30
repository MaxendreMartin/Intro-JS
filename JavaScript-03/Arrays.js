const readlineSync = require("readline-sync");

/*Exercice 3.1*/
/*const arr = [1, 2, 3, 4, 5];
let somme = 0;
for (e of arr) somme += e;
console.log(`La somme de ce tableaux est ${somme}`);*/

/*Exercice 3.2*/
/*let arr = [1, 2, 3, 4, 5];
let m = 0;
for (e of arr) m += e;
let moy = m / arr.length;
console.log("La moyenne de ce tableau est " + moy);*/

/*Exercice 3.3*/
/*let arr = [1, 2, 3, 4, 5];
let arrcopy = [];
arrcopy.push(arr);
console.log(arr, arrcopy);*/

/*Exercice 3.4*/
let arr = [1, 5, 10, 15, 20];
Math.min.apply(null, arr);
Math.max.apply(null, arr);

console.log(Math.min.apply(null, arr), Math.max.apply(null, arr));

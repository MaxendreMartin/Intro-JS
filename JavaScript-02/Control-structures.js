const readlineSync = require("readline-sync");

/*Exercice 2.1*/
/*let age = readlineSync.question("Entrer votre âge ");

if (age >= 18) {
    console.log("Vous êtes un adulte");
} else {
    console.log("Vous n êtes pas encore adulte");
}*/

/*Exercie 2.2*/
/*const min = readlineSync.question("Entrer un nombre ");
const max = readlineSync.question("Entrer un plus grand nombre ");
const current = readlineSync.question("Entrer un  nombre entre les deux ");

if (current > min && current < max) {
    console.log("Bien joué!");
}*/

/*Exercice 2.3*/
/*console.log("Nombre de 1 à 100: ");
let i = 1;
while (i <= 100) {
    console.log(i);
    i++;
}*/

/*Exercice 2.4*/
/*console.log("Résultat des nombres pairs jusqu'à 100 divisé par 2: ");
let i = 1;
while (i <= 100) {
    if (i % 2 === 0) console.log(i / 2);
    else console.log(i * 3);
    i++;
}*/

/*Exerice 2.5*/
/*let nombre = new Number(readlineSync.question("Écris ton nombre préféré:  "));
while (nombre != 42) {
    nombre = new Number(readlineSync.question("Êtes-vous sur?  "));
}*/

/*Exercice 2.6*/
/*let num = new Number(readlineSync.question("Entrer un nombre entre 1 et 7: "));
if (num == 1) {
    console.log("Lundi");
} else if (num == 2) {
    console.log("Mardi");
} else if (num == 3) {
    console.log("Mercredi");
} else if (num == 4) {
    console.log("Jeudi");
} else if (num == 5) {
    console.log("Vendredi");
} else if (num == 6) {
    console.log("Samedi");
} else if (num == 7) {
    console.log("Dimanche");
}*/

/*Exercice 2.7*/
let n = new Number(readlineSync.question("Entrer un numéro: "));
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += new Number(
        readlineSync.question(`Entrer un nouveau numéro ${i} : `)
    );
}

console.log(`Voici la somme de tous vos nombres collectés ${sum}.`);

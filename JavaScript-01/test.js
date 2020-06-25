const readlineSync = require("readline-sync");
/*Exercice 1.1*/
/*let âge = 20;
console.log(âge);*/

/*Exercice 1.2*/
/*let name = "Gérard";
let firstname = "Lambert";
let city = "Paris";
console.log(
    "Your name is " + name + " " + firstname + " and you live in " + city
);
*/

/*Exercice 1.3*/
/*let firstname = readlineSync.question("to enter its first name ");
console.log("Hello " + firstname);*/

/*Exercice 1.4*/
/*let name = readlineSync.question("Entrez votre prénom ");
let firstname = readlineSync.question("Entrez votre nom ");
let city = readlineSync.question("Entrez votre ville ");
console.log(
    "Je m'appelle " + name + " " + firstname + " et j'habite à " + city
);*/

/*Exercice 1.5*/
/*let number = readlineSync.question("Entre un nombre décimal ");
let number2 = readlineSync.question("Entre un deuxième autre nombre décimal ");

number = Math.trunc(number);

const result = number * number2;

console.log(result);*/

/*Exercice 1.6*/
/*let number = readlineSync.question("Entre un nombre entier ");
let number2 = readlineSync.question("Entre un deuxième nombre entier ");

const result = number / number2;

console.log("Il reste " + result + " de la divison");*/

/*Exercice 1.7*/
/*let point = readlineSync.question("Quelle est ta pointure ");
let annee = readlineSync.question("Quelle est ta date de naissance ");

let result = point * 2;
result += 5;
result *= 50;
result -= annee;
result += 1766;

console.log(result);*/

/*Exercice 1.8*/
const sport = readlineSync.question("Q 1/5: choisis un sport ");
const name = readlineSync.question("Q 2/5: Écris un prénom ");
const ville = readlineSync.question("Q 3/5: Choisis le nom d'une ville ");
const pays = readlineSync.question("Q 4/4 Choisis un pays ");

console.log(
    name + " " + "faisait du " + " " + sport + " " + "à" + " " + ville + ". "
);
console.log(
    "Il était tellement fort qu'il a été appelé pour jouer en " +
        " " +
        pays +
        "."
);
console.log("Fin.");

const readlineSync = require("readline-sync");

function askTvSerie() {
    let SerieTV = {
        Name: "",
        Year: "",
        CastUser: [],
    };
    SerieTV.Name = readlineSync.question("Nom de ta série préféré? ");
    SerieTV.Year = Number(
        readlineSync.question("En quelle année a-t-elle été produite? ")
    );
    let actor = readlineSync.question(
        "Acteur de la serie (pour quitter terminer par /) : "
    );
    do {
        SerieTV.CastUser.push({ actor });
        actor = readlineSync.question(
            "Acteur de la serie (pour quitter terminer par /) : "
        );
    } while (actor != "/");
    return SerieTV;
}

//Ne fonctionne paas à corriger
function randomizeCast(el) {
    let i, j, tmp;
    for (i = SerieTV.actor.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tmp = tab[i];
        tab[i] = tab[j];
        tab[j] = tmp;
    }
    return el;
}
console.log("voici la distribution" + randomizeCast());

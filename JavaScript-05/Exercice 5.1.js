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
console.log(JSON.stringify(askTvSerie()));

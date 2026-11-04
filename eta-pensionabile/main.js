// Scrivi una funzione che,
// dato l'anno di nascita e il genere (M/F),
// calcoli quanti anni mancano per raggiungere l'età pensionabile 
// (fissata a 67 anni per gli uomini e 62 per le donne).

function calcolaEtaPensionabile(annoDiNascita, genere) {
    const annoCorrente = new Date().getFullYear();
    const etaAttuale = annoCorrente - annoDiNascita;

    // Determina l'età pensionabile in base al genere
    let etaPensione = 67; // default per gli uomini
    if (genere.toUpperCase() === "F") {
        etaPensione = 62;
    }

    // Calcolo degli anni che mancano
    const anniMancanti = etaPensione - etaAttuale;

    // Se gli anni mancanti sono 0 o negativi, la persona ha già raggiunto la pensione
    if (anniMancanti <= 0) {
        return "Hai già raggiunto l'età pensionabile!";
    }

    return anniMancanti;
}

// Esempi di test:
console.log("Uomo nato nel 1990:", calcolaEtaPensionabile(1990, "M"), "anni alla pensione");
console.log("Donna nata nel 1990:", calcolaEtaPensionabile(1990, "F"), "anni alla pensione");
console.log("Uomo nato nel 1950:", calcolaEtaPensionabile(1950, "M"));


// Esempi di test:
console.log("Uomo nato nel 1990:", calcolaEtaPensionabile(1990, "M"), "anni alla pensione");
console.log("Donna nata nel 1990:", calcolaEtaPensionabile(1990, "F"), "anni alla pensione");
console.log("Uomo nato nel 1950:", calcolaEtaPensionabile(1950, "M"));
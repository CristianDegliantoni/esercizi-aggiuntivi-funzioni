// Un taxi applica una tariffa extra fissa dopo la mezzanotte. 
// Scrivi una funzione che calcoli il totale della corsa
// dato il prezzo base all'orario di partenza e all'orario di arrivo.

function calcolaTariffa(prezzoBase, orarioPartenza, orarioArrivo) {
    const extra = 5; // tariffa extra notturna

    // Se la corsa supera la mezzanotte (es. dalle 23 all'1)
    // oppure si svolge nelle prime ore dopo la mezzanotte (prima delle 6:00)
    if (orarioArrivo < orarioPartenza || orarioPartenza < 6) {
        return prezzoBase + extra;
    } else {
        return prezzoBase;
    }
}

// Esempi di test:
console.log("Corsa diurna (14:00 -> 15:00):", calcolaTariffa(20, 14, 15), "€"); // 20 €
console.log("Corsa con scavallo mezzanotte (23:00 -> 01:00):", calcolaTariffa(25, 23, 1), "€"); // 30 €
console.log("Corsa notturna (02:00 -> 03:00):", calcolaTariffa(15, 2, 3), "€"); // 20 €

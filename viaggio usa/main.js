//Stai pianificando un viaggio negli USA.
//Scrivi una funzione che converta una somma in Euro nel corrispondente valore in Dollari,
//dato il tasso di cambio del giorno.


function convertiEuroInDollari(euro, tassoCambio) {
    const dollari = euro * tassoCambio;
    return dollari;
}
// Esempio d'uso:
const sommaEuro = 150;
const cambioOggi = 1.08; // 1 € = 1.08 $
const totaleDollari = convertiEuroInDollari(sommaEuro, cambioOggi);
console.log(`Con ${sommaEuro}€ riceverai ${totaleDollari}$`);
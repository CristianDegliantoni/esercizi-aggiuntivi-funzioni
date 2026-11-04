//Un professore deve convertire un voto numerico in un giudizio.
//Scrivi una funzione che restituisca "Insufficiente",
//"Sufficiente" o "Ottimo" in base al punteggio.


function convertivoto(voto) {

    if (voto < 6) {
        voto = "insufficiente"
    } else if (voto >= 6 && voto < 8) {
        voto = "sufficiente"
    } else if (voto > 8) {
        voto = "ottimo"
    }
    return voto;
}

console.log("ho otternuto 6 quindi il prof mi ha scritto", convertivoto(6))
console.log("ho otternuto 10 quindi il prof mi ha scritto", convertivoto(10))
console.log("ho otternuto 5 quindi il prof mi ha scritto", convertivoto(5))
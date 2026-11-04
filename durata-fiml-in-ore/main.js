// Hai la durata di un film in minuti totali.
// Scrivi una funzione che la converta in un formato più leggibile
// "X ore e Y minuti".

function convertiMinuti(minutiTotali) {
    const ore = Math.floor(minutiTotali / 60);
    const minuti = minutiTotali % 60;
    return `${ore} ore e ${minuti} minuti`;
}


// test:
console.log("Un film di 135 minuti dura:", convertiMinuti(135));
console.log("Un film di 90 minuti dura:", convertiMinuti(90));

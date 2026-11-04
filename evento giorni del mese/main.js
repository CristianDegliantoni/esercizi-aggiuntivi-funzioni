//Stai organizzando un evento.
//Scrivi una funzione che ti dica quanti giorni
//ha un determinato mese.

function giorniDelMese(mese) {
    //[pos.0, Gen, Feb, Mar, Apr, Mag, Giu, Lug, Ago, Set, Ott, Nov, Dic]
    const giorni = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    return giorni[mese];
}


//************************* altro modo **************************************/

//function giorniDelMese(mese) {
  //  if (mese === 2) return 28;
  //  if (mese === 4 || mese === 6 || mese === 9 || mese === 11) return 30;
    
  //  return 31; // tutti gli altri
//}

/************************ altro modo ******************************************/

// function giorniDelMese(mese, anno = 2026) {
//     return new Date(anno, mese, 0).getDate();
// }
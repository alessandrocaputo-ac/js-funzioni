// Traccia 10 · Il taxi di notte
// La consegna è nel README, alla voce "10 · Il taxi di notte".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? verificaOraNotturna
  Di quali dati ha bisogno? un'ora -> oraRicevuta
  Deve restituire qualcosa? si, true o false
  Di che tipo? Boolean

  LE QUATTRO DOMANDE (seconda funzione)
  Come si chiama? calcolaTotaleCorsa
  Di quali dati ha bisogno? il prezzo base, l'ora di partenza e l'ora di arrivo -> prezzoBase, oraPartenza, oraArrivo
  Deve restituire qualcosa? si, il totale
  Di che tipo? Number
  
  STEPS
  1 - se l'ora è minore o uguale a 5, restituisco true
  2 - altrimenti restituisco false

  STEPS (seconda funzione)
  1 - se l'ora di partenza è di notte o l'ora di arrivo è di notte, restituisco il prezzo base più 5 €
  2 - altrimenti restituisco il prezzo base
*/
// # Le funzioni
function verificaOraNotturna(oraRicevuta) {
  if (oraRicevuta <= 5) {
    return true;
  } else {
    return false;
  }
}

function calcolaTotaleCorsa(prezzoBase, oraPartenza, oraArrivo) {
  if (verificaOraNotturna(oraPartenza) || verificaOraNotturna(oraArrivo)) {
    return prezzoBase + 5;
  } else {
    return prezzoBase;
  }
}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"
console.log(verificaOraNotturna(0));
console.log(verificaOraNotturna(5));
console.log(verificaOraNotturna(6));
console.log(verificaOraNotturna(23));
console.log(calcolaTotaleCorsa(20, 22, 23));
console.log(calcolaTotaleCorsa(20, 23, 1));
console.log(calcolaTotaleCorsa(20, 23, 0));
console.log(calcolaTotaleCorsa(20, 2, 3));
console.log(calcolaTotaleCorsa(20, 5, 6));
console.log(calcolaTotaleCorsa(20, 6, 7));
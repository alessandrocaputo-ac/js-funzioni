// Traccia 05 · La fascia d'età
// La consegna è nel README, alla voce "05 · La fascia d'età".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? trovaFasciaEta
  Di quali dati ha bisogno? età delle persone ->etaPersona
  Deve restituire qualcosa? si, l'etichetta della fascia d'età
  Di che tipo? String

  STEPS
  1 - se l'età è minore di 0, restituisco "Età non valida"
  2 - se l'età è minore di 18, restituisco "Minorenne"
  3 - se l'età è minore o uguale a 35, restituisco "Giovane Adulto"
  4 - se l'età è minore o uguale a 60, restituisco "Adulto"
  5 - altrimenti restituisco "Senior"
*/

// # La funzione
function trovaFasciaEta(etaPersona) {
  if (etaPersona < 0) {
    return "Età non valida";
  } else if (etaPersona < 18) {
    return "Minorenne";
  } else if (etaPersona <= 35) {
    return "Giovane Adulto";
  } else if (etaPersona <= 60) {
    return "Adulto";
  } else {
    return "Senior";
  }
}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"
console.log(trovaFasciaEta(0));
console.log(trovaFasciaEta(17));
console.log(trovaFasciaEta(18));
console.log(trovaFasciaEta(35));
console.log(trovaFasciaEta(36));
console.log(trovaFasciaEta(60));
console.log(trovaFasciaEta(61));
console.log(trovaFasciaEta(-3));

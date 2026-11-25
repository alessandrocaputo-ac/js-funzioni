// Traccia 09 · Quanto manca alla pensione
// La consegna è nel README, alla voce "09 · Quanto manca alla pensione".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? trovaEtaPensione
  Di quali dati ha bisogno? il tipo di lavoro -> tipoLavoro
  Deve restituire qualcosa? si, l'età della pensione
  Di che tipo? Number

  LE QUATTRO DOMANDE (seconda funzione)
  Come si chiama? calcolaAnniAllaPensione
  Di quali dati ha bisogno? anno di nascita, anno corrente e tipo di lavoro ->annoDiNascita, annoCorrente, tipoLavoro
  Deve restituire qualcosa? si, quanti anni mancano alla pensione
  Di che tipo? Number

  STEPS
  1 - se il lavoro è ordinario restituisco 67
  2 - altrimenti restituisco 62

  STEPS (seconda funzione)
  1 - calcolo l'età attuale: anno corrente meno anno di nascita
  2 - trovo l'età della pensione con trovaEtaPensione, passandole tipoLavoro
  3 - calcolo gli anni che mancano: età della pensione meno età attuale 
  4 - se gli anni che mancano sono minori di 0, restituisco 0
  5 - altrimenti restituisco gli anni che mancano alla pensione  
*/

// # Le funzioni
function trovaEtaPensione(tipoLavoro) {
  if (tipoLavoro === "ordinario") {
    return 67;
  } else {
    return 62;
  }
}

function calcolaAnniAllaPensione(annoDiNascita, annoCorrente, tipoLavoro) {
  const etaAttuale = annoCorrente - annoDiNascita;
  const etaPensione = trovaEtaPensione(tipoLavoro);
  const anniMancanti = etaPensione - etaAttuale;
  if (anniMancanti < 0) {
    return 0;
  } else {
    return anniMancanti;
  }
}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"
console.log(trovaEtaPensione("ordinario"));
console.log(trovaEtaPensione("usurante"));
console.log(calcolaAnniAllaPensione(2000, 2026, "ordinario"));
console.log(calcolaAnniAllaPensione(2000, 2026, "usurante"));
console.log(calcolaAnniAllaPensione(2000, 2027, "ordinario"));
console.log(calcolaAnniAllaPensione(1960, 2026, "ordinario"));
console.log(calcolaAnniAllaPensione(1964, 2026, "usurante"));
console.log(calcolaAnniAllaPensione(1950, 2026, "ordinario"));
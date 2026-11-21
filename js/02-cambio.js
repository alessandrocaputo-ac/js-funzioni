// Traccia 02 · Il cambio in aeroporto
// La consegna è nel README, alla voce "02 · Il cambio in aeroporto".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? calcolaDollariRicevuti
  Di quali dati ha bisogno? gli euro, il tasso e la commissione -> euroDaCambiare, tassoDiCambio, commissioneDaPagare
  Deve restituire qualcosa? si, i dollari ricevuti
  Di che tipo? Number

  STEPS
  1 - se gli euro non bastano a pagare la commissione, restituisco 0
  2 -tolgo la commissione dagli euro
  3 - moltiplico gli euro rimasti per il tasso di cambio e restituisco i dollari
*/

// # La funzione
function calcolaDollariRicevuti(euroDaCambiare, tassoDiCambio, commissioneDaPagare) {
  if (euroDaCambiare <= commissioneDaPagare) {
    return 0;
  }
  const importoSenzaCommissione = euroDaCambiare - commissioneDaPagare;
  return importoSenzaCommissione * tassoDiCambio;
}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"
console.log(`100 € diventano ${calcolaDollariRicevuti(100, 1.08, 5).toFixed(2)} $`);
console.log(`250 € diventano ${calcolaDollariRicevuti(250, 1.08, 5).toFixed(2)} $`);
console.log(`100 € diventano ${calcolaDollariRicevuti(100, 1.12, 0).toFixed(2)} $`);
console.log(`3 € diventano ${calcolaDollariRicevuti(3, 1.08, 5).toFixed(2)} $`);
// con tasso e commissione scambiati esce 494.60: JavaScript riempie i parametri in ordine e non guarda i nomi
console.log(`100 € diventano ${calcolaDollariRicevuti(100, 5, 1.08).toFixed(2)} $`);
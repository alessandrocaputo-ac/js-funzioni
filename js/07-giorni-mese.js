// Traccia 07 · I giorni del mese
// La consegna è nel README, alla voce "07 · I giorni del mese".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? contaGiorniDelMese
  Di quali dati ha bisogno? il numero del mese -> numeroMese
  Deve restituire qualcosa? si, quanti giorni ci sono in un mese
  Di che tipo? Number

  STEPS
  1 - se il numero del mese è minore di 1 o maggiore di 12, restituisco 0
  2 - preparo l'elenco dei giorni di ogni mese, da gennaio a dicembre
  3 - prendo dall'elenco il numero di giorni del mese richiesto e lo restituisco
*/

// # La funzione
function contaGiorniDelMese(numeroMese) {
  if (numeroMese < 1 || numeroMese > 12) {
    return 0;
  }
  const giorniDeiMesi = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return giorniDeiMesi[numeroMese - 1];
}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"
console.log(contaGiorniDelMese(1));
console.log(contaGiorniDelMese(2));
console.log(contaGiorniDelMese(4));
console.log(contaGiorniDelMese(8));
console.log(contaGiorniDelMese(11));
console.log(contaGiorniDelMese(12));
console.log(contaGiorniDelMese(0));
console.log(contaGiorniDelMese(13));
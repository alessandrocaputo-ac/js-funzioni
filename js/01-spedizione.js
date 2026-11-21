// Traccia 01 · Lo stato della spedizione
// La consegna è nel README, alla voce "01 · Lo stato della spedizione".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? trovaStatoSpedizione
  Di quali dati ha bisogno? Il numero della spedizione -> numeroSpedizione
  Deve restituire qualcosa? lo stato della spedizione
  Di che tipo? String

  STEPS
  1 - Se il numero è 1, resituisco "In elaborazione"
  2 - se il numero è 2, restituisco "Spedito"
  3 - se il numero è 3, restituisco "Consegnato"
  4 - altrimenti restituisco "Stato sconosciuto"
*/

// # La funzione
function trovaStatoSpedizione(numeroSpedizione) {
  if (numeroSpedizione === 1) {
    return "In elaborazione";
  } else if (numeroSpedizione === 2) {
    return "Spedito";
  } else if (numeroSpedizione === 3) {
    return "Consegnato";
  } else {
    return "Stato sconosciuto";
  }
}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"
console.log(trovaStatoSpedizione(1));
console.log(trovaStatoSpedizione(2));
console.log(trovaStatoSpedizione(3));
console.log(trovaStatoSpedizione(4));
console.log(trovaStatoSpedizione(0));
console.log(trovaStatoSpedizione('2'));
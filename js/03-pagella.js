// Traccia 03 · Lo scritto vale doppio
// La consegna è nel README, alla voce "03 · Lo scritto vale doppio".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? calcolaMediaPonderata
  Di quali dati ha bisogno? il voto dello scritto e il voto dell'orale -> votoScritto, votoOrale
  Deve restituire qualcosa? si, la media dei due voti
  Di che tipo? number

  STEPS
  1 - sommo il voto dello scritto per 2 e il voto dell'orale
  2 - divido il totale per 3 e restituisco la media
*/

// # La funzione
function calcolaMediaPonderata(votoScritto, votoOrale) {
  return (votoScritto + votoScritto + votoOrale) / 3;
}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"
console.log(`Media: ${calcolaMediaPonderata(6, 9).toFixed(1)}`);

console.log(`Media: ${calcolaMediaPonderata(9, 6).toFixed(1)}`);
console.log(`Media: ${calcolaMediaPonderata(8, 6).toFixed(1)}`);
console.log(`Media: ${calcolaMediaPonderata(5, 8).toFixed(1)}`);
console.log(`Media: ${calcolaMediaPonderata(10, 10).toFixed(1)} `);
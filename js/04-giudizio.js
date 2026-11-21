// Traccia 04 · Dal voto al giudizio
// La consegna è nel README, alla voce "04 · Dal voto al giudizio".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? trovaGiudizio
  Di quali dati ha bisogno? il voto dell'alunno -> votoAlunno
  Deve restituire qualcosa? si, il giudizio
  Di che tipo? string

  STEPS
  1 - Se il voto è minore di 1 o maggiore di 10, restituisco "Voto non valido"
  2 - Se il voto è minore di 5, restituisco "Gravemente insufficiente"
  3 - Se il voto è minore di 6, restituisco "Insufficiente"
  4 - se il voto è minore di 7, restituisco "Sufficiente"
  5 - se il voto è minore di 8, restituisco "Buono"
  6 - altrimenti restituisco "Ottimo"
*/

// # La funzione
function trovaGiudizio(votoAlunno) {
  if (votoAlunno < 1 || votoAlunno > 10) {
    return "Voto non valido";
  } else if (votoAlunno < 5) {
    return "Gravemente insufficiente";
  } else if (votoAlunno < 6) {
    return "Insufficiente";
  } else if (votoAlunno < 7) {
    return "Sufficiente";
  } else if (votoAlunno < 8) {
    return "Buono";
  } else {
    return "Ottimo";
  }
}

function calcolaMediaPonderata(votoScritto, votoOrale) {
  return (votoScritto + votoScritto + votoOrale) / 3;
}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"
console.log(trovaGiudizio(3));
console.log(trovaGiudizio(5));
console.log(trovaGiudizio(5.5));
console.log(trovaGiudizio(6));
console.log(trovaGiudizio(7.5));
console.log(trovaGiudizio(8));
console.log(trovaGiudizio(10));
console.log(trovaGiudizio(0));
console.log(trovaGiudizio(11));


console.log(trovaGiudizio(calcolaMediaPonderata(6, 9)));
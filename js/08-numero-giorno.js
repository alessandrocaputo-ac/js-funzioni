// Traccia 08 · Dal nome al numero del giorno
// La consegna è nel README, alla voce "08 · Dal nome al numero del giorno".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? trovaNumeroGiorno
  Di quali dati ha bisogno? del nome del giorno della settimana -> nomeGiorno
  Deve restituire qualcosa? si, a quale numero equivale il giorno della settimana
  Di che tipo? Number

  STEPS
  1 - preparo la lista dei giorni della settimana, da Lunedì a Domenica
  2 - guardo i giorni della lista uno alla volta: se il giorno è uguale a nomeGiorno, restituisco la sua posizione nella lista
  3 - se dopo aver guardato tutta la lista non l'ho trovato, restituisco 0
*/

// # La funzione
function trovaNumeroGiorno(nomeGiorno) {
  const giorniDellaSettimana = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];
  for (let i = 0; i < giorniDellaSettimana.length; i++) {
    if (giorniDellaSettimana[i] === nomeGiorno) {
      return i + 1;
    }
  }
  return 0;
}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"
console.log(trovaNumeroGiorno("Lunedì"));
console.log(trovaNumeroGiorno("Mercoledì"));
console.log(trovaNumeroGiorno("Domenica"));
console.log(trovaNumeroGiorno("lunedì"));
console.log(trovaNumeroGiorno("Lunedi"));
console.log(trovaNumeroGiorno("Pippo"));
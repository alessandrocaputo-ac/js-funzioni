// Traccia 06 · La durata del film
// La consegna è nel README, alla voce "06 · La durata del film".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? formattaDurata
  Di quali dati ha bisogno? i minuti totali del film -> minutiDurata
  Deve restituire qualcosa? si, la durata in ore e minuti
  Di che tipo? String

  STEPS
  1 - calcolo le ore: divido i minuti totali per 60 e tengo solo la parte intera
  2 - calcolo i minuti: prendo il resto della divisione dei minuti totali per 60
  3 - se le ore sono 0, restituisco solo i minuti con la parola "minuti"
  4 - preparo la parola delle ore: se le ore sono uguali a 1 uso "ora", altrimenti uso "ore"
  5 - se i minuti sono 0, restituisco solo le ore con la parola delle ore
  6 - altrimenti restituisco le ore con la parola delle ore, poi "e", poi i minuti con la parola "minuti"
*/

// # La funzione
function formattaDurata(minutiDurata) {
  const oreCalcolate = Math.floor(minutiDurata / 60);
  const minutiCalcolati = minutiDurata % 60;
  if (oreCalcolate === 0) {
    return `${minutiCalcolati} minuti`;
  }
  let parolaOre = "ore";
  if (oreCalcolate === 1) {
    parolaOre = "ora";
  }
  if (minutiCalcolati === 0) {
    return `${oreCalcolate} ${parolaOre}`;
  }
  return `${oreCalcolate} ${parolaOre} e ${minutiCalcolati} minuti`;
}


// # Le prove: una riga di console.log per ogni caso di "Come verifichi"
console.log(formattaDurata(148));
console.log(formattaDurata(95));
console.log(formattaDurata(120));
console.log(formattaDurata(60));
console.log(formattaDurata(45));
console.log(formattaDurata(0));
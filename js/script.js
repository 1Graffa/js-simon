//Esercizio di oggi:

//Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
//Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//creo i 2 array e genero dei numeri random assegnandoli a quelle dell'alert
var array5Random = [];
var arrayUtente = [];

while(array5Random.length < 5){
  var numeroSingolo = generaNumero(1,100);
  if (!array5Random.includes(numeroSingolo)){
    array5Random.push(numeroSingolo);
  }
}
alert(array5Random);

// dopo la chiusura dell'alert parte il timeout di 3 secondi coi 5 comparePrompt

setTimeout(comparePrompt, 3000);

// eseguo comparazione numeri in array

console.log(array5Random);
console.log(arrayUtente);

//Funzione genera numero casuale compreso tra min e max
function generaNumero(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// qui la funzione per far comparire il prompt
function comparePrompt(){
  for(var i = 0 ; i < 5; i++){
    var numeroUtente= parseInt(prompt("inserisci un numero"))
    arrayUtente.push(numeroUtente);

  }
}

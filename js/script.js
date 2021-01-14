//Esercizio di oggi:

//Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
//Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//genero dei numeri random assegnandoli ad un array
var array5Random = [];
var arrayUtente = [];
for(var i = 0 ; i < 5; i++){
  array5Random.push(generaNumero(1,100));
}
alert(array5Random);
setTimeout(comparePrompt, 3000);

function comparePrompt(){
  for(var i = 0 ; i < 5; i++){
    arrayUtente.push(parseInt(prompt("inserisci un numero")));
  }
}

console.log(array5Random);
console.log(arrayUtente);


// 4 L'utente per 30 secondi non vede nulla....e quindi cercherà immagino di ripetersi mentalmente i numeri

// 5 L'utente prova a inserire, uno alla volta, tutti e 5 i numeri :muscle:




//Funzione genera numero casuale compreso tra min e max
function generaNumero(min, max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

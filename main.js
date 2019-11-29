// Creare in HTML una griglia formata da 8x8 quadratini tutti bianchi. ok
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi
// Suggerimento: usare una classe per individuare quali quadratini diventano rossi
// BONUS: generare la griglia dei quadratini utilizzando jQuery

$(document).ready(function() {
  //BONUS: creo un ciclo for per generare 8 contenitori
  for (var i = 0; i < 8; i++) {
      $('body').append('<div class="quadrati-container"></div>');
  };
  //BONUS: creo un ciclo for per creare 8 quadrati all'interno degli 8 contenitori
  for (var i = 0; i < 8; i++) {
      $('.quadrati-container').append('<div class="quadrato"></div>');
  };

  var bombeGenerate = []; //creo un contenitore di bombe
  var contatore = 0;
  while (bombeGenerate.length < 15) { //15 è il numero massimo di bombe che devono andare dentro il contenitore
   var bombe = generaRandom(1,64); //Creo un numero causale
   if(!bombeGenerate.includes(bombe)) { //Controllo che il numero non ci sia nell’Array
         bombeGenerate.push(bombe); //Se non c’è lo metto nell’array (bombeGenerate)
   }
   contatore++ // per uscire dal ciclo
  };
  for (var i = 0; i < bombeGenerate.length; i++) { //creo un ciclo for per aggiungere la classe red al div quadrato
    $('.quadrato').eq(bombeGenerate[i]).addClass('red');
  };

  $('.quadrato').click(function(){ // al click sul quadrato
      $(this).addClass('active'); // viene aggiunta una classe active
  });
});


function generaRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

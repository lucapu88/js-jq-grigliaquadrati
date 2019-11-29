// Creare in HTML una griglia formata da 8x8 quadratini tutti bianchi. ok
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi
// Suggerimento: usare una classe per individuare quali quadratini diventano rossi
// BONUS: generare la griglia dei quadratini utilizzando jQuery

$(document).ready(function() {
  $('.quadrato').click(function(){ // al click sul quadrato
      $(this).addClass('active'); // viene aggiunta una classe active
  });
  
});

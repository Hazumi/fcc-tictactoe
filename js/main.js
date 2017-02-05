var o = document.getElementById('o');
var x = document.getElementById('x');
var display = document.querySelector('.display');
var newGame = document.getElementById('new-game');
var player_symbol;
var btn = document.getElementById('btn');

btn.addEventListener('click', function() {
  newGame.style.visibility = "hidden";
  console.log('o');
});

o.addEventListener('click', function() {
  player_symbol = 'o';
  display.innerHTML = "";
});

x.addEventListener('click', function() {
  console.log('x');
});

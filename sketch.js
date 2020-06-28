var canvas, backgroundImage;
var gameState, playerCount;
var database;
var form, player;
var allPlayers;

gameState= 0;
function setup() {
  canvas = createCanvas(500,500);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background("white");
  form.display();
  if(playerCount===4) {
      game.update(1);
  }
  if(gameState===1) {
    clear();
    game.play();
  }
}
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const W = ctx.canvas.width;
const H = ctx.canvas.height;
let player;
let raf;
let frames = 0;
let gameover;

function draw() {
  ctx.clearRect(0, 0, W, H);
  canvasImage.draw();
  canvasImage.move();
  player.draw();
}

function animeLoop() {
  frames++;
  draw();
  if (!gameover) {
    requestAnimationFrame(animeLoop);
  }
}

function startGame() {
  if (raf) {
    cancelAnimationFrame(raf);
  }
  gameover = false;
  player = new Player();
  requestAnimationFrame(animeLoop);
}

document.getElementById("start-button").onclick = function () {
  startGame();
};

startGame();

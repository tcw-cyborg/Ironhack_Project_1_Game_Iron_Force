const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const W = ctx.canvas.width;
const H = ctx.canvas.height;
let player;
let playerFires = [];
let enemy;
let enemies = [];
let enemyFire;
let enemyFires = [];
let raf;
let frames = 0;
let gameover;

function draw() {
  ctx.clearRect(0, 0, W, H);

  canvasBeach.draw();
  canvasBeach.move();

  canvasClouds.draw();
  canvasClouds.move();

  player.draw();
  playerFires.forEach(function (el) {
    el.move();
    el.draw();
  });

  // enemy.draw();
  enemyFires.forEach(function (el) {
    el.move();
    el.draw();
  });

  if (frames % 150 === 0) {
    enemy = new Enemy();
    enemies.push(enemy);
  }

  enemies.forEach(function (enemy) {
    enemy.y += 5;
    enemy.draw();
  });
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
  playerFire = new PlayerFire();
  // enemy = new Enemy();
  enemyFire = new EnemyFire();
  requestAnimationFrame(animeLoop);
}

document.getElementById("start-button").onclick = function () {
  startGame();
};

startGame();

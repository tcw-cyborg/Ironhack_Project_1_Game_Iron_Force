const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const W = ctx.canvas.width;
const H = ctx.canvas.height;
let player;
let playerFire;
let playerFires = [];
let enemy;
let enemies = [];
let enemyFire;
let enemyFires = [];
let raf;
let frames = 0;
let gameover;
let time;

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

  enemy.draw();
  enemyFires.forEach(function (el) {
    el.move();
    el.draw();
  });

  if (frames % 200 === 0) {
    enemy = new Enemy();
    enemies.push(enemy);
  }

  enemies.forEach(function (enemy) {
    enemy.y += 10;
    enemy.draw();
  });

  for (enemy of enemies) {
    if (enemy.hits(player)) {
      console.log("crashed");
      gameover = true;
    }
  }

  for (enemyFire of enemyFires) {
    if (enemyFire.hits(player)) {
      console.log("touched");
      gameover = true;
    }
  }

  for (playerFire of playerFires) {
    if (playerFire.hits(enemy)) {
      console.log("Boom!");
      gameover = false;
    }
  }

  ctx.font = "100px Arial";
  ctx.textAlign = "right";
  ctx.fillStyle = "red";
  ctx.fillText(`Time : ${time}`, W-50, 100);
  time++;
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
  time = 0;
  player = new Player();
  playerFire = new PlayerFire();
  enemy = new Enemy();
  enemyFire = new EnemyFire();
  requestAnimationFrame(animeLoop);
}

document.getElementById("start-button").onclick = function () {
  startGame();
};

startGame();

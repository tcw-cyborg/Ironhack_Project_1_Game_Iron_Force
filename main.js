const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const W = ctx.canvas.width;
const H = ctx.canvas.height;
let player;
let playerFire;
let playerFires = [];
let enemies = [];
let enemyFire;
let enemyFires = [];
let raf;
let frames = 0;
let gameover;
let time;

function playMusic() {
  let music = document.getElementById("bandeOriginale");
  music.setAttribute("preload", "auto");
  music.autobuffer = true;
  music.load();
  music.play();
}

function shot() {
  enemyFires.push(
    new EnemyFire(15, enemy.x + 0.5 * enemy.w, enemy.y - enemy.h)
  );
}

function draw() {
  //
  // toutes les 16ms
  //

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

  //
  // move + draw de tous les tirs enemies
  //
  enemyFires.forEach(function (el) {
    el.move();
    el.draw();
  });

  //
  // générer un new enemy toutes les 80 frames
  //
  if (frames % 80 === 0) {
    enemies.push(new Enemy());
  }

  const randFrames = Math.floor(200 + Math.random() * 300); // [200..500]
  if (frames % 300 === 0) {
    // parmi les enemies, on va en tirer un au sort et le faire tirer toutes les 3 secondes
    const enemyShooter = Math.floor(Math.random() * randFrames);
    setInterval(function () {
      enemyShooter.shot();
      enemyFire.play();
    }, 3000);
  }

  //
  // tracer et décalage de chaque vaisseau enemy vers le bas
  //
  enemies.forEach(function (el) {
    el.y += 10;
    el.draw();
  });

  //
  // collisions entre vaisseaux ennemy et mon player
  //
  for (let enemy of enemies) {
    if (enemy.hits(player)) {
      console.log("crashed");
      gameover = true;
      alert("Crashed ! GAME OVER !!!");
      document.location.reload();
    }
  }

  //
  // collisions entre tirs ennemy et mon player
  //
  for (enemyFire of enemyFires) {
    if (enemyFire.hits(player)) {
      console.log("touched");
      gameover = true;
      alert("Touched ! GAME OVER !!!");
      document.location.reload();
    }
  }

  //
  // collisions entre les tirs du player et les vaisseaux enemy.
  //
  playerFires.forEach(function (playerFire, i) {
    enemies.forEach(function (enemy, j) {
      if (playerFire.hits(enemy)) {
        console.log("Boom!");
        // enlever l'enemi en question
        enemies.splice(j, 1);
        // enlever le tir en question
        playerFires.splice(i, 1);
      }
    });
  });

  ctx.font = "100px Arial";
  ctx.textAlign = "right";
  ctx.fillStyle = "red";
  ctx.fillText(`Time : ${time}`, W - 50, 100);
  time++;
}

function animeLoop() {
  console.log("Anime Loop");
  frames++;
  draw();
  if (!gameover) {
    raf = requestAnimationFrame(animeLoop);
  } else {
    cancelAnimationFrame(raf);
  }
}

function startGame() {
  gameover = false;
  time = 0;
  playMusic();
  player = new Player();
  playerFire = new PlayerFire();
  enemyFire = new EnemyFire();
  raf = requestAnimationFrame(animeLoop);
}

document.getElementById("start-button").onclick = function () {
  startGame();
};

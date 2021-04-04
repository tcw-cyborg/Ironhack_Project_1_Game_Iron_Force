const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const W = ctx.canvas.width;
const H = ctx.canvas.height;
let player;
// let playerFire; // en statique pour reglage
let playerFires = [];
// let enemy; // en statique pour reglage
let enemies = [];
// let enemyFire; // en statique pour reglage
let enemyFires = [];
// let drone; // en statique pour reglage
let drones = [];
let raf;
let frames = 0;
let gameover;
let score;

function playMusic() {
  let music = document.getElementById("soundTrack");
  music.setAttribute("preload", "auto");
  music.autobuffer = true;
  music.load();
  music.play();
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

  //
  // move + draw de tous les tirs du player
  //
  playerFires.forEach(function (el) {
    el.move();
    el.draw();
  });

  // //
  // // draw enemy en statique pour reglage
  // //
  // enemy.draw();

  //
  // move + draw de tous les tirs enemies
  //
  enemyFires.forEach(function (el) {
    el.move();
    el.draw();
  });

  //
  // générer un new enemy toutes les 250 frames
  //
  if (frames % 250 === 0) {
    enemies.push(new Enemy());
  }

  // const randFrames = Math.floor(200 + Math.random() * 300); // [200..500]
  // if (frames % 300 === 0) {
  //   // parmi les enemies, on va en tirer un au sort et le faire tirer (toutes les 2 secondes, tant qu'il n'est pas détruit)
  //   const enemyShooter = Math.floor(randFrames + Math.random() * enemies.length);
  //   setInterval(function () {
  //     enemyShooter.shot();
  //   }, 2000);
  // }

  //
  // décalage, tracer et tirs de chaque vaisseau enemy vers le bas
  //
  enemies.forEach(function (el) {
    el.y += 10;
    el.draw();
    // setInterval(function () {
    //   el.shot();
    // }, 2000);
  });

  // //
  // // draw drone en statique pour reglage
  // //
  // drone.draw();

  //
  // générer un new drone toutes les 200 frames
  //
  if (frames % 200 === 0) {
    drones.push(new Drone());
  }

  //
  // decalage et tracer de chaque drone vers le bas
  //
  drones.forEach(function (el) {
    el.y += 15;
    el.draw();
  });

  //
  // collisions entre vaisseaux enemy et mon player
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
  // collisions entre tirs enemy et mon player
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
  // collisions entre drone et mon player
  //
  for (let drone of drones) {
    if (drone.hits(player)) {
      console.log("crashed");
      gameover = true;
      alert("Crashed ! GAME OVER !!!");
      document.location.reload();
    }
  }

  //
  // collisions entre les tirs du player et les vaisseaux enemy
  //
  playerFires.forEach(function (playerFire, i) {
    enemies.forEach(function (enemy, j) {
      if (playerFire.hits(enemy)) {
        console.log("Boom!");
        // enlever l'enemi en question
        enemies.splice(j, 1);
        score += 2;
        // enlever le tir en question
        playerFires.splice(i, 1);
      }
    });
  });

  //
  // collisions entre les tirs du player et les drones
  //
  playerFires.forEach(function (playerFire, i) {
    drones.forEach(function (drone, k) {
      if (playerFire.hits(drone)) {
        console.log("Boom!");
        // enlever le drone en question
        drones.splice(k, 1);
        score++;
        // enlever le tir en question
        playerFires.splice(i, 1);
      }
    });
  });
}

function scoreDisplay() {
  ctx.font = "100px Arial";
  ctx.textAlign = "right";
  ctx.fillStyle = "red";
  ctx.fillText(`Score : ${score} pts`, W - 50, 100);
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
  scoreDisplay();
}

function startGame() {
  gameover = false;
  score = 0;
  playMusic();
  player = new Player();
  // playerFire = new PlayerFire(); // en statique pour reglage
  // enemy = new Enemy(); // en statique pour reglage
  // enemyFire = new EnemyFire(); // en statique pour reglage
  // drone = new Drone(); // en statique pour reglage
  raf = requestAnimationFrame(animeLoop);
}

document.getElementById("start-button").onclick = function () {
  startGame();
};

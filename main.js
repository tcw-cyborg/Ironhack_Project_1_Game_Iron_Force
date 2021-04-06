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
// let explosion; // en statique pour reglage
let explosions = [];

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
  // générer un new enemy toutes les 250 frames
  //
  if (frames % 250 === 0) {
    enemies.push(new Enemy());
  }

  //
  // décalage et tracer de chaque vaisseau enemy vers le bas, avec action tirs automatiques
  //
  enemies.forEach(function (el) {
    el.y += 10;
    el.draw();
    if (frames % 100 === 0) {
      el.shot();
    }
  });

  //
  // move + draw de tous les tirs enemy
  //
  enemyFires.forEach(function (el) {
    el.move();
    el.draw();
  });

  // //
  // // draw drone en statique pour reglage
  // //
  // drone.draw();

  //
  // générer un new drone toutes les 150 frames
  //
  if (frames % 150 === 0) {
    drones.push(new Drone());
  }

  //
  // decalage et tracer de chaque drone vers le bas
  //
  drones.forEach(function (el) {
    el.y += 13;
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
  for (let enemyFire of enemyFires) {
    if (enemyFire.hits(player)) {
      console.log("touched");
      gameover = true;
      alert("Touched ! GAME OVER !!!");
      document.location.reload();
    }
  }

  //
  // retirer les tirs perdus des vaisseaux enemy de son tableau pour nettoyage
  //
  enemyFires.forEach(function (enemyFire, l) {
    if (enemyFire.y > 2700) {
      enemyFires.splice(l, 1);
    }
  });

  //
  // collisions entre drones et mon player
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
  // collisions entre les tirs du player et les vaisseaux enemy = +2 points
  // retrait de 2 points si enemy passe la frontière
  //
  playerFires.forEach(function (playerFire, i) {
    enemies.forEach(function (enemy, j) {
      if (playerFire.hits(enemy)) {
        console.log("Boom!");
        explodeSound();
        // enlever l'enemi en question
        enemies.splice(j, 1);
        // enlever le tir en question
        playerFires.splice(i, 1);
        // ajouter 2 points au score pour chaque enemy détruit
        score += 2;
      }
      // retirer 2 points pour un enemy qui passe la frontière et nettoyage tableau enemies
      if (enemy.y > 2700) {
        enemies.splice(j, 1);
        score -= 2;
      }
    });
    // retirer les tirs perdus du player de son tableau pour nettoyage
    if (playerFire.y < 20) {
      playerFires.splice(i, 1);
    }
  });

  //
  // collisions entre les tirs du player et les drones = +1 point
  // retrait de 1 point si drone passe la frontière
  //
  playerFires.forEach(function (playerFire, i) {
    drones.forEach(function (drone, j) {
      if (playerFire.hits(drone)) {
        console.log("Boom!");
        explodeSound();
        // enlever le drone en question
        drones.splice(j, 1);
        // enlever le tir en question
        playerFires.splice(i, 1);
        // ajouter 1 points au score pour chaque drone détruit
        score++;
      }
      // retirer 1 point pour un drone qui passe la frontière et nettoyage tableau drones
      if (drone.y > 2700) {
        drones.splice(j, 1);
        score--;
      }
    });
    // retirer les tirs perdus du player de son tableau pour nettoyage
    if (playerFire.y < 20) {
      playerFires.splice(i, 1);
    }
  });

  // //
  // // draw enemy en statique pour reglage
  // //
  // explosion.draw(); // en statique pour reglage
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
  // explosion = new Explosion(); // en statique pour reglage
  raf = requestAnimationFrame(animeLoop);
}

document.getElementById("start-button").onclick = function () {
  startGame();
};

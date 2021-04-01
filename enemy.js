function random(from, to) {
  return Math.floor(from + Math.random() * (to - from));
}
class Enemy {
  constructor(speed) {
    this.speed = speed;
    const img = document.createElement("img");
    img.onload = () => {
      this.img = img;

      this.w = 350;
      this.h = 360;

      // this.x = W / 2 - this.w / 2;
      // this.y = H - this.h - 2000;

      this.x = random(0, W - this.w);
      this.y = -this.h;
    };
    img.src = "../codeFiles/ressources/images/enemy.png";
  }

  draw() {
    if (!this.img) return;
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  shot() {
    enemyFires.push(
      new EnemyFire(15, enemy.x + 0.5 * enemy.w, enemy.y - enemy.h)
    );
  }

  move() {
    this.y += this.speed;
  }

  hits(player) {
    return (
      player.x + player.w >= this.x &&
      player.x <= this.x + this.w &&
      player.y <= this.y + this.h &&
      player.y + player.h >= this.y
    );
  }
}

// let intervalEnemyFires = setInterval(function () {
//   enemy.shot();
//   enemyFire.play();
// }, 3000);

// clearInterval(intervalEnemyFires);

// const enemyCommand = (document.onkeydown = function (event) {
//   switch (event.key) {
//     case "8":
//       if (enemy.y >= 8) {
//         enemy.y += -25;
//       }
//       enemy.draw();
//       break;
//     case "2":
//       if (enemy.y <= 2300) {
//         enemy.y += 25;
//       }
//       enemy.draw();
//       break;
//     case "K":
//       if (enemy.y <= 2300) {
//         enemy.y += 25;
//       }
//       enemy.draw();
//       break;
//     case "4":
//       if (enemy.x >= 5) {
//         enemy.x += -25;
//       }
//       enemy.draw();
//       break;
//     case "U":
//       if (enemy.x >= 5) {
//         enemy.x += -25;
//       }
//       enemy.draw();
//       break;
//     case "6":
//       if (enemy.x <= 1130) {
//         enemy.x += 25;
//       }
//       enemy.draw();
//       break;
//     case "O":
//       if (enemy.x <= 1130) {
//         enemy.x += 25;
//       }
//       enemy.draw();
//       break;
//     case "3":
//       if (enemy.y <= 2300 && enemy.x <= 1130) {
//         enemy.y += 25;
//         enemy.x += 25;
//       }
//       enemy.draw();
//       break;
//     case "L":
//       if (enemy.y <= 2300 && enemy.x <= 1130) {
//         enemy.y += 25;
//         enemy.x += 25;
//       }
//       enemy.draw();
//       break;
//     case "1":
//       if (enemy.y <= 2300 && enemy.x >= 5) {
//         enemy.y += 25;
//         enemy.x += -25;
//       }
//       enemy.draw();
//       break;
//     case "J":
//       if (enemy.y <= 2300 && enemy.x >= 5) {
//         enemy.y += 25;
//         enemy.x += -25;
//       }
//       enemy.draw();
//       break;
//     case "7":
//       if (enemy.y >= 8 && enemy.x >= 5) {
//         enemy.y += -25;
//         enemy.x += -25;
//       }
//       enemy.draw();
//       break;
//     case "9":
//       if (enemy.y >= 8 && enemy.x <= 1130) {
//         enemy.y += -25;
//         enemy.x += 25;
//       }
//       enemy.draw();
//       break;
//     case "X":
//       console.log("fire");
//       enemy.shot();
//       enemyFire.play();
//       break;
//   }
// });

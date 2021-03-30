class Enemy {
  constructor(speed) {
    this.speed = speed;
    const img = document.createElement("img");
    img.onload = () => {
      this.img = img;

      const imgRatio = img.naturalWidth / img.naturalWidth;

      this.w = 450;
      this.h = this.w / imgRatio;

      this.x = W / 2 - this.w / 2;
      this.y = H - this.h - 2000;
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
}

let intervalEnemyFires = setInterval(function () {
  enemy.shot();
  enemyFire.play();
}, 3000);

// clearInterval(intervalEnemyFires);

// const enemyCommand = (document.onkeydown = function (event) {
//   switch (event.key) {
//     case "8":
//       if (enemy.y >= -28) {
//         enemy.y += -25;
//       }
//       enemy.draw();
//       break;
//     case "2":
//       if (enemy.y <= 2185) {
//         enemy.y += 25;
//       }
//       enemy.draw();
//       break;
//     case "K":
//       if (enemy.y <= 2185) {
//         enemy.y += 25;
//       }
//       enemy.draw();
//       break;
//     case "4":
//       if (enemy.x >= -70) {
//         enemy.x += -25;
//       }
//       enemy.draw();
//       break;
//     case "U":
//       if (enemy.x >= -70) {
//         enemy.x += -25;
//       }
//       enemy.draw();
//       break;
//     case "6":
//       if (enemy.x <= 1070) {
//         enemy.x += 25;
//       }
//       enemy.draw();
//       break;
//     case "O":
//       if (enemy.x <= 1070) {
//         enemy.x += 25;
//       }
//       enemy.draw();
//       break;
//     case "3":
//       if (enemy.y <= 2185 && enemy.x <= 1070) {
//         enemy.y += 25;
//         enemy.x += 25;
//       }
//       enemy.draw();
//       break;
//     case "L":
//       if (enemy.y <= 2185 && enemy.x <= 1070) {
//         enemy.y += 25;
//         enemy.x += 25;
//       }
//       enemy.draw();
//       break;
//     case "1":
//       if (enemy.y <= 2185 && enemy.x >= -70) {
//         enemy.y += 25;
//         enemy.x += -25;
//       }
//       enemy.draw();
//       break;
//     case "J":
//       if (enemy.y <= 2185 && enemy.x >= -70) {
//         enemy.y += 25;
//         enemy.x += -25;
//       }
//       enemy.draw();
//       break;
//     case "7":
//       if (enemy.y >= -28 && enemy.x >= -70) {
//         enemy.y += -25;
//         enemy.x += -25;
//       }
//       enemy.draw();
//       break;
//     case "9":
//       if (enemy.y >= -28 && enemy.x <= 1070) {
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

// function rand(min, max) {
//   let random = Math.floor(Math.random() * (max - min) + min);
//   return random;
// }

// rand(1, 10);
// let result = 0;
// setInterval(function() {
//   const $div = document.createElement('div');
//   $div.className = "enemies";
//   $div.style.left = `${rand(0, window.innerWidth)}px`;
//   $div.style.top = `${rand(0, window.innerHeight)}px`;
// })

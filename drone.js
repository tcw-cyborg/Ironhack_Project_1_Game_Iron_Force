function random(from, to) {
  return Math.floor(from + Math.random() * (to - from));
}

class Drone {
  constructor() {
    const img = document.createElement("img");
    img.onload = () => {
      this.img = img;

      this.w = 300;
      this.h = 280;

      // positions reglage
      // this.x = W / 4 - this.w / 4;
      // this.y = H - this.h - 1500;

      this.x = random(0, W - this.w);
      this.y = -this.h;
    };
    img.src = "../codeFiles/ressources/images/drone.png";
  }

  draw() {
    if (!this.img) return;
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  hits(player) {
    return (
      player.x + player.w >= this.x &&
      player.x <= this.x + this.w &&
      player.y <= this.y + this.h &&
      player.y + player.h >= this.y
    );
  }

  explode() {
    explosions.push(new Explosion(drone.x, drone.y));
    const audio = new Audio("../codeFiles/ressources/sounds/playerFire.mp3");
    audio.play();
  }
}

// 
// reglage commandes drone
//
// const droneCommand = (document.onkeydown = function (event) {
//   switch (event.key) {
//     case "8":
//       if (drone.y >= 8) {
//         drone.y += -25;
//       }
//       drone.draw();
//       break;
//     case "2":
//       if (drone.y <= 2300) {
//         drone.y += 25;
//       }
//       drone.draw();
//       break;
//     case "K":
//       if (drone.y <= 2300) {
//         drone.y += 25;
//       }
//       drone.draw();
//       break;
//     case "4":
//       if (drone.x >= 5) {
//         drone.x += -25;
//       }
//       drone.draw();
//       break;
//     case "U":
//       if (drone.x >= 5) {
//         drone.x += -25;
//       }
//       drone.draw();
//       break;
//     case "6":
//       if (drone.x <= 1130) {
//         drone.x += 25;
//       }
//       drone.draw();
//       break;
//     case "O":
//       if (drone.x <= 1130) {
//         drone.x += 25;
//       }
//       drone.draw();
//       break;
//     case "3":
//       if (drone.y <= 2300 && drone.x <= 1130) {
//         drone.y += 25;
//         drone.x += 25;
//       }
//       drone.draw();
//       break;
//     case "L":
//       if (drone.y <= 2300 && drone.x <= 1130) {
//         drone.y += 25;
//         drone.x += 25;
//       }
//       drone.draw();
//       break;
//     case "1":
//       if (drone.y <= 2300 && drone.x >= 5) {
//         drone.y += 25;
//         drone.x += -25;
//       }
//       drone.draw();
//       break;
//     case "J":
//       if (drone.y <= 2300 && drone.x >= 5) {
//         drone.y += 25;
//         drone.x += -25;
//       }
//       drone.draw();
//       break;
//     case "7":
//       if (drone.y >= 8 && drone.x >= 5) {
//         drone.y += -25;
//         drone.x += -25;
//       }
//       drone.draw();
//       break;
//     case "9":
//       if (drone.y >= 8 && drone.x <= 1130) {
//         drone.y += -25;
//         drone.x += 25;
//       }
//       drone.draw();
//       break;
//   }
// });

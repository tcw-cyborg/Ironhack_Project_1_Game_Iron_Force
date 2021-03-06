class Player {
  constructor() {
    const img = document.createElement("img");
    img.onload = () => {
      this.img = img;

      this.w = 400;
      this.h = 500;

      this.x = W / 2 - this.w / 2;
      this.y = H - this.h - 500;
    };
    img.src = "ressources/images/player.png";

    // const img2 = document.createElement("img");
    // img2.onload = () => {
    //   this.img2 = img2;
    // }
    // img2.src = "ressources/explosions/exb_015.png";
  }

  draw() {
    if (!this.img) return;
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    // if(gameover === true);
    // ctx.drawImage(this.img2, this.x, this.y, this.w, this.h);
  }

  shot() {
    playerFires.push(new PlayerFire(50, player.x + 0.5 * player.w, player.y - player.h));
    const audio = new Audio("ressources/sounds/playerFire.mp3");
    audio.play();
  }

  explode() {
    explosions.push(new Explosion(player.x, player.y));
    const audio = new Audio("ressources/sounds/explosionSound.mp3");
    audio.play();
  }
}

//
// reglage commandes player
//
const playerCommand = (document.onkeydown = function (event) {
  if (gameover === false) {
    switch (event.key) {
      case "8":
        if (player.y >= 30) {
          player.y += -50;
        }
        player.draw();
        break;
      case "2":
        if (player.y <= 2160) {
          player.y += 50;
        }
        player.draw();
        break;
      case "K":
        if (player.y <= 2160) {
          player.y += 50;
        }
        player.draw();
        break;
      case "4":
        if (player.x >= 5) {
          player.x += -50;
        }
        player.draw();
        break;
      case "U":
        if (player.x >= 5) {
          player.x += -50;
        }
        player.draw();
        break;
      case "6":
        if (player.x <= 1070) {
          player.x += 50;
        }
        player.draw();
        break;
      case "O":
        if (player.x <= 1070) {
          player.x += 50;
        }
        player.draw();
        break;
      case "3":
        if (player.y <= 2160 && player.x <= 1070) {
          player.y += 50;
          player.x += 50;
        }
        player.draw();
        break;
      case "L":
        if (player.y <= 2160 && player.x <= 1070) {
          player.y += 50;
          player.x += 50;
        }
        player.draw();
        break;
      case "1":
        if (player.y <= 2160 && player.x >= 5) {
          player.y += 50;
          player.x += -50;
        }
        player.draw();
        break;
      case "J":
        if (player.y <= 2160 && player.x >= 5) {
          player.y += 50;
          player.x += -50;
        }
        player.draw();
        break;
      case "7":
        if (player.y >= 30 && player.x >= 5) {
          player.y += -50;
          player.x += -50;
        }
        player.draw();
        break;
      case "9":
        if (player.y >= 30 && player.x <= 1070) {
          player.y += -50;
          player.x += 50;
        }
        player.draw();
        break;
      case "W":
        console.log("fire");
        player.shot();
        break;
    }
  }
});

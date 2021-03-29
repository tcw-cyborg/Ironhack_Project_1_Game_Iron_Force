class Player {
  constructor() {
    const img = document.createElement("img");
    img.onload = () => {
      this.img = img;

      const imgRatio = img.naturalWidth / img.naturalWidth;

      this.w = 500;
      this.h = this.w / imgRatio;

      this.x = W / 2 - this.w / 2;
      this.y = H - this.h - 500;
    };
    img.src = "../codeFiles/ressources/images/player.png";
  }

  draw() {
    if (!this.img) return;
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  shot() {
    playerFires.push(
      new PlayerFire(50, player.x + 0.5 * player.w, player.y - player.h)
    );
  }
}

document.onkeydown = function (event) {
  switch (event.key) {
    case "8":
      if (player.y >= -28) {
        player.y += -25;
      }
      player.draw();
      break;
    case "2":
      if (player.y <= 2185) {
        player.y += 25;
      }
      player.draw();
      break;
    case "K":
      if (player.y <= 2185) {
        player.y += 25;
      }
      player.draw();
      break;
    case "4":
      if (player.x >= -70) {
        player.x += -25;
      }
      player.draw();
      break;
    case "U":
      if (player.x >= -70) {
        player.x += -25;
      }
      player.draw();
      break;
    case "6":
      if (player.x <= 1070) {
        player.x += 25;
      }
      player.draw();
      break;
    case "O":
      if (player.x <= 1070) {
        player.x += 25;
      }
      player.draw();
      break;
    case "3":
      if (player.y <= 2185 && player.x <= 1070) {
        player.y += 25;
        player.x += 25;
      }
      player.draw();
      break;
    case "L":
      if (player.y <= 2185 && player.x <= 1070) {
        player.y += 25;
        player.x += 25;
      }
      player.draw();
      break;
    case "1":
      if (player.y <= 2185 && player.x >= -70) {
        player.y += 25;
        player.x += -25;
      }
      player.draw();
      break;
    case "J":
      if (player.y <= 2185 && player.x >= -70) {
        player.y += 25;
        player.x += -25;
      }
      player.draw();
      break;
    case "7":
      if (player.y >= -28 && player.x >= -70) {
        player.y += -25;
        player.x += -25;
      }
      player.draw();
      break;
    case "9":
      if (player.y >= -28 && player.x <= 1070) {
        player.y += -25;
        player.x += 25;
      }
      player.draw();
      break;
    case "W":
      console.log("fire");
      player.shot();
      playerFire.play();
      break;
  }
};

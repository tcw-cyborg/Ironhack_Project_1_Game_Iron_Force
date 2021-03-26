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
    img.src = "../graphicAsset/spaceship/player_4.png";
  }

  draw() {
    if (!this.img) return;
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
}

document.onkeydown = function (event) {
  switch (event.key) {
    case "ArrowUp":
      if (player.y >= -28) {
        player.y += -25;
      }
      player.draw();
      break;
    case "ArrowDown":
      if (player.y <= 2185) {
        player.y += 25;
      }
      player.draw();
      break;
    case "ArrowLeft":
      if (player.x >= -70) {
        player.x += -25;
      }
      player.draw();
      break;
    case "ArrowRight":
      if (player.x <= 1070) {
        player.x += 25;
      }
      player.draw();
      break;
    case "Control":
      console.log("fire");

      break;
  }
};

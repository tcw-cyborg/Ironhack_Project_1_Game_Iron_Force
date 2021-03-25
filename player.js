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
    ctx.clearRect(0, 0, 1499, 2667);
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
}

const ship = new Player();

document.onkeydown = function (event) {
  switch (event.key) {
    case "ArrowUp":
      ship.y += -25;
      ship.draw();
      break;
    case "ArrowDown":
      ship.y += 25;
      ship.draw();
      break;
    case "ArrowLeft":
      ship.x += -25;
      ship.draw();
      break;
    case "ArrowRight":
      ship.x += 25;
      ship.draw();
      break;
    case "Control":
      console.log("fire");

      break;
  }
};

class PlayerFire {
  constructor(speed, x, y) {
    this.speed = speed;
    this.w = 100;
    this.h = 400;
    this.x = x - 0.5 * this.w;
    this.y = y + 0.4 * this.h;
    const img = document.createElement("img");
    img.onload = () => {
      this.img = img;
      const imgRatio = img.naturalWidth / img.naturalWidth;
    };
    img.src = "../graphicAsset/projectiles/spaceship/shoot_5.png";
  }

  draw() {
    if (!this.img) return;
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  move() {
    this.y -= this.speed;
  }
}

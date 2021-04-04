class EnemyFire {
  constructor(speed, x, y) {
    this.speed = speed;
    this.w = 250;
    this.h = 260;
    this.x = x - 0.5 * this.w;
    this.y = y + 2.5 * this.h;
    const img = document.createElement("img");
    img.onload = () => {
      this.img = img;
    };
    img.src = "../codeFiles/ressources/images/enemyFire.png";
  }

  draw() {
    if (!this.img) return;
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
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

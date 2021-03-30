class EnemyFire {
  constructor(speed, x, y) {
    this.speed = speed;
    this.w = 250;
    this.h = 250;
    this.x = x - 0.5 * this.w;
    this.y = y + 3 * this.h;
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

  play() {
    const audio = new Audio("../codeFiles/ressources/sounds/enemyFire.mp3");
    audio.play();
  }
}

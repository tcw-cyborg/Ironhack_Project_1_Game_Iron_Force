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
    };
    img.src = "../codeFiles/ressources/images/playerFire.png";
  }

  draw() {
    if (!this.img) return;
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  move() {
    this.y -= this.speed;
  }

  play() {
    const audio = new Audio("../codeFiles/ressources/sounds/playerFire.mp3");
    audio.play();
  }

  hits(enemy) {
    return (
      enemy.x + enemy.w >= this.x &&
      enemy.x <= this.x + this.w &&
      enemy.y <= this.y + this.h &&
      enemy.y + enemy.h >= this.y
    );
  }
}

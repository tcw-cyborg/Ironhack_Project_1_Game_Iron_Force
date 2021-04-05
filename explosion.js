class Explosion {
  constructor(x, y) {
    const imgExplosion = document.createElement("img");
    imgExplosion.onload = () => {
      this.img = imgExplosion;

      this.w = 700;
      this.h = 700;

      // positions reglage
      this.x = W / 4 - this.w / 4;
      this.y = H - this.h - 1500;

      // this.x = x;
      // this.y = y;
    };
    imgExplosion.src = "../codeFiles/ressources/explosions/exb_015.png";
  }

  draw() {
    if (!this.img) return;
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
}

function explodeSound() {
  const audio = new Audio("../codeFiles/ressources/sounds/explosionSound.mp3");
  audio.play();
}

class Element {
  constructor(health) {
    this.health = health;
  }

  shot() {

  }

  collision() {

  }
}


class Player extends Element {
  constructor(health) {
    super(health);
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;

      const imgRatio = img.naturalWidth/img.naturalWidth;

      this.w = 200;
      this.h = this.w/imgRatio;

      this.x = W/2-this.w/2;
      this.y = H-this.h-100;
    }
    img.src ="../graphicAsset/spaceship/player_4.png"
  }

  draw() {
    if (!this.img) return;

    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  moveLeft() {
    this.x += -10;
  }
  moveRight() {
    this.x += 10;
  }
  moveFront() {
    this.y += -10;
  }
  moveRear() {
    this.y += 10;
  }
}


class Enemies extends Element {
  constructor(health) {
    super(health);
  }
}



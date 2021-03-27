class EnemyFire {
    constructor(speed) {
      this.speed = speed;
      const img = document.createElement("img");
      img.onload = () => {
        this.img = img;
  
        const imgRatio = img.naturalWidth / img.naturalWidth;
  
        this.w = 250;
        this.h = this.w / imgRatio;
  
        this.x = W / 2 - this.w / 2;
        this.y = H - this.h - 1900;
      };
      img.src = "../graphicAsset/projectiles/enemies/shoot_3.png";
    }
  
    draw() {
      if (!this.img) return;
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }

    move() {
      this.y += this.speed;
    }
  }
  
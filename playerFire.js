class PlayerFire {
    constructor() {
      const img = document.createElement("img");
      img.onload = () => {
        this.img = img;
  
        const imgRatio = img.naturalWidth / img.naturalWidth;
  
        this.w = 100;
        this.h = 400;
  
        this.x = W / 2 - this.w / 2;
        this.y = H - this.h - 950;
      };
      img.src = "../graphicAsset/projectiles/spaceship/shoot_5.png";
    }
  
    draw() {
      if (!this.img) return;
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
  }
  
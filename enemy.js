class Enemy {
  constructor() {
    const img = document.createElement("img");
    img.onload = () => {
      this.img = img;

      const imgRatio = img.naturalWidth / img.naturalWidth;

      this.w = 450;
      this.h = this.w / imgRatio;

      this.x = W / 2 - this.w / 2;
      this.y = H - this.h - 2000;
    };
    img.src = "../graphicAsset/enemies/en_13.png";
  }

  draw() {
    if (!this.img) return;
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
}

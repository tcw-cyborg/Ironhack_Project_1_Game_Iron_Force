const imgBeach = new Image();
imgBeach.src = "ressources/images/beach.png";

imgBeach.onload = function () {
  canvas;
  ctx;
};

const canvasBeach = {
  img: imgBeach,
  x: 0,
  y: 0,
  speed: 4,

  move: function () {
    this.y += this.speed;
    this.y %= canvas.height;
  },

  draw: function () {
    ctx.drawImage(this.img, 0, this.y);
    if (this.speed < 0) {
      ctx.drawImage(this.img, 0, this.y + this.img.height);
    } else {
      ctx.drawImage(this.img, 0, this.y - canvas.height);
    }
  },
};

const imgClouds = new Image();
imgClouds.src = "ressources/images/clouds.png";

imgClouds.onload = function () {
  canvas;
  ctx;
};

const canvasClouds = {
  img: imgClouds,
  x: 0,
  y: 0,
  speed: 7,

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

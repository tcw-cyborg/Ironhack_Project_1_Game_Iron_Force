const img = new Image();
img.src='../graphicAsset/backgrounds/bg7a.png';

let canvas = document.querySelector('#game-display canvas');
let ctx = canvas.getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

img.onload = function() {
  canvas;
  ctx;
  updateCanvas();
};

const canvasImage = {
  img: img,
  x: 0,
  y: 0,
  speed: 1,

  move: function() {
    this.y += this.speed;
    this.y %= canvas.height;
  },

  draw: function() {
    ctx.drawImage(this.img, 0, this.y);
    if (this.speed < 0) {
      ctx.drawImage(this.img, 0, this.y + this.img.height);
    } else {
      ctx.drawImage(this.img, 0, this.y - canvas.height);
    }
  },
};

function updateCanvas() {
  canvasImage.move();
  canvasImage.draw();
  requestAnimationFrame(updateCanvas);
}

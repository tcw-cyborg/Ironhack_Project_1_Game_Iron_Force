class Enemy {
  constructor(speed) {
    this.speed = speed;
    const img = document.createElement("img");
    img.onload = () => {
      this.img = img;

      const imgRatio = img.naturalWidth / img.naturalWidth;

      this.w = 450;
      this.h = this.w / imgRatio;

      this.x = W / 2 - this.w / 2;
      this.y = H - this.h - 2000;
    };
    img.src = "../codeFiles/ressources/images/enemy.png";
  }

  draw() {
    if (!this.img) return;
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  move() {
    this.y += this.speed;
  }

  // shot() {
  //   enemyFires.push(
  //     new enemyFire(50, enemy.x + 0.5 * enemy.w, enemy.y - enemy.h)
  //   );
  // }
}

// document.onkeydown = function (event) {
//   switch (event.key) {
//     case "5":
//       console.log("enemyFire");
//       enemy.shot();
//       break;
//   }
// };

// function rand(min, max) {
//   let random = Math.floor(Math.random() * (max - min) + min);
//   return random;
// }

// rand(1, 10);
// let result = 0;
// setInterval(function() {
//   const $div = document.createElement('div');
//   $div.className = "enemies";
//   $div.style.left = `${rand(0, window.innerWidth)}px`;
//   $div.style.top = `${rand(0, window.innerHei)}px
// })

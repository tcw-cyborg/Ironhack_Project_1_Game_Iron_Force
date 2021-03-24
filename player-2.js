let player2 = document.getElementById('ship');
player2.style.position = "absolute";
player2.style.left = "400px";
player2.style.top = "700px";

document.onkeydown = function (e) {
  if (e.keyCode == 37) {
    player2.left += -10;
  } else if (e.keyCode == 39) {
    player2.right += 10;
  } else if (e.keyCode == 38) {
    player2.front += -10;
  } else if (e.keyCode == 40) {
    player2.rear += 10;
  }
}

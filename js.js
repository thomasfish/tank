function createbubble(num) {
  var bubble = document.createElement("div");
  bubble.id = "bubble" + num;
  bubble.className = "bubble";
  bubble.style.left = random(0, 100) + "vw";
  bubble.style.top = random(0, 100) + "vh";
  bubble.style.opacity = Math.random() / 2;
  bubble.style.animationDuration =  (4  + (Math.random() * 4)) + "s";
  document.body.appendChild(bubble);
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

for (var i = 0; i < 25; i++) {
  createbubble(i);
}

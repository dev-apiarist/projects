const canvas = document.getElementById("hexagon");
const ctx = canvas.getContext("2d");

const a = (2 * Math.PI) / 6;
const r = 121;

// 1st
x = r;
y = r;
drawHexagon(x, y);

// 2nd
x = x + r + r * Math.cos(a);
y = y + r * Math.sin(a);
drawHexagon(x, y);

// 3rd
x = x + r + r * Math.cos(a);
y = y - r * Math.sin(a);
drawHexagon(x, y);

// 4th
x = x + r + r * Math.cos(a);
y = y + r * Math.sin(a);
drawHexagon(x, y);

// 5th
x = x + r + r * Math.cos(a);
y = y - r * Math.sin(a);
drawHexagon(x, y);

// 6th
x = x + r + r * Math.cos(a);
y = y + r * Math.sin(a);
drawHexagon(x, y);

function drawHexagon(x, y) {
  ctx.beginPath();
  for (var i = 0; i < 6; i++) {
    ctx.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
  }
  ctx.closePath();
  ctx.stroke();
}

let hex = new Image();
hex.src = "/images/bee-img (1).jpg";
function drawImage(src, x, y, w, h) {
  ctx.drawImage(src, x, y, w, h);
}

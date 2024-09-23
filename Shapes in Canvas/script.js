const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(10, 10);

// Right Arrow
ctx.strokeStyle="green"
ctx.lineTo(100, 10);
ctx.lineTo(150, 50);
ctx.lineTo(100, 100);
ctx.lineTo(10, 100);
ctx.lineTo(10, 10);
ctx.stroke();
ctx.strokeStyle="black";

ctx.moveTo(10, 200);
ctx.lineTo(80+10, 120);
ctx.lineTo(160, 200);
ctx.lineTo(10, 200);

ctx.stroke();
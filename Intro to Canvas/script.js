const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");  //Used for drawing

ctx.fillStyle = "red";

// Drawing a Rectangle
ctx.fillRect(10, 10, 70, 70); //fillRect(x, y, width, height)

// Drawing a Line
ctx.moveTo(10, 90); //Start Position moveTo(x, y)
ctx.lineTo(200, 90);  //End Position lineTo(x, y)
ctx.lineWidth = 10
ctx.strokeStyle = "blue"
ctx.lineCap = "round"; //"butt", "round" or "square"
ctx.stroke(); //This draws a line

ctx.lineWidth = 1 //To Reset lineWidth, which was affecting Circle Line.
ctx.strokeStyle = "black" //To Reset lineWidth, which was affecting Circle Line color.
ctx.lineCap = "square"; //To Reset lineCap, which was affecting Circle Line Cap.

// Drawing a Circle
ctx.beginPath(); //Start a new path
ctx.fillStyle = "green";
ctx.fill();
ctx.arc(160, 45, 35, 0, 2 * Math.PI) //arc(x, y, r, startangle, endangle)

ctx.stroke();
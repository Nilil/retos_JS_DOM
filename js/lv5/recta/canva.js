const canvaSpace = document.getElementById("line");
const context = canvaSpace.getContext("2d");
context.beginPath();

// Linea central
context.moveTo(50, 100);
context.lineTo(350, 100);

// Linea de 0
context.moveTo(200, 90);
context.lineTo(200, 110);

// Linea de usuario
context.moveTo(200, 80);
context.lineTo(150, 80);

context.stroke();

//document.addEventListener('keyup', dibujarCanvas);
document.getElementById('area_de_dibujo').addEventListener('mousemove', drawMouse);
document.getElementById('change-id').addEventListener('click', changeColor);


var firstX = 0;
var firstY = 0;

var official_color = "pink";

// var minwidth = 10;
// var maxwidth = 309;
// var minheight = 208;
// var maxheight = 508;
var xi_mouse = 10;
var yi_mouse = 208;
var xf_mouse = 309;
var yf_mouse = 378;

var firstX = 0;
var firstY = 0;



var cuadrito = document.getElementById('area_de_dibujo');
var papel = cuadrito.getContext('2d');

drawLine('pink', 0, 0, 0, 300, papel);
drawLine('pink', 0, 0, 300, 0, papel);
drawLine('pink', 300, 0, 300, 300, papel);
drawLine('pink', 0, 300, 300, 300, papel);

function drawMouse(evento){
	// console.log("X: " + evento.screenX);
	// console.log("Y: " + evento.screenY);
	drawLine( official_color, firstX, firstY, evento.screenX - 6, evento.screenY - 208 , papel);
	firstX = evento.screenX - 6;
	firstY = evento.screenY - 208;
	
}
function changeColor(){
	if(official_color == "pink"){
		official_color = "red";
	}
	else if(official_color == "red"){
		official_color = "pink";
	}
}

	//drawLine('pink', 149, 149, 151, 151, papel);

	var x = 150;
	var y = 150;
	var mov = 1;


	function drawLine(color, xinicial, yinicial, xfinal, yfinal, lienzo){
		lienzo.beginPath();
		lienzo.strokeStyle = color;
		lienzo.lineWidth = 2;
		lienzo.moveTo(xinicial, yinicial);
		lienzo.lineTo(xfinal, yfinal);
		lienzo.stroke();
		lienzo.closePath();
	}

// function dibujarCanvas(evento){
// 	switch(evento.keyCode){
// 		case teclas.UP : 
// 			console.log("¡Flecha arriba!");
// 			drawLine("pink", x, y, x, y-mov, papel);
// 			y = y - mov;
// 		break;

// 		case teclas.RIGHT: 
// 			console.log("¡Flecha a la derecha!");
// 			drawLine("pink", x, y, x + mov, y, papel);
// 			x = x + mov;
// 		break;

// 		case teclas.DOWN: 
// 			console.log("¡Flecha abajo!");
// 			drawLine("pink", x, y, x, y+mov, papel);
// 			y = y + mov;
// 		break;

// 		case teclas.LEFT: 
// 			console.log("Flecha a la izquierda");
// 			drawLine("pink", x, y, x-mov, y, papel);
// 			x = x - mov;
// 		break;
// 		default: console.log("¡Tecla incorrecta!");

// 	}
// }

var teclas = {
	UP: 38,
	RIGHT: 39,
	DOWN: 40,
	LEFT: 37
}
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};


document.addEventListener("keydown", dibujarTeclado);


var cuadro = document.getElementById('pizzara');
var papel = cuadro.getContext("2d")
var x = 300;
var y = 150;

dibujarLinea("#000", 0, 0, 1, 1, papel)

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinals, lienzo) {

    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 1;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinals);
    lienzo.stroke();
    lienzo.closePath();
}


function dibujarTeclado(evento) {

    colorcito = "#000"
    var movimiento = 1;
    switch (evento.keyCode) {
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
            break;
        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
            break;
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
            break;
        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
            break;
        default:
            console.log('otra tecla');

    }
}
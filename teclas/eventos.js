var teclas = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};


var cuadrito = document.getElementById("area_de_dibujo");
var boton_teclado = document.getElementById("btn_teclado");
var boton_mouse = document.getElementById("btn_mouse");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;

boton_teclado.addEventListener("click", usarTeclado);
boton_mouse.addEventListener("click", usarMouse);

function usarTeclado() {

    document.addEventListener("keydown", dibujarTeclado);
}

function usarMouse() {
    cuadrito.addEventListener("mousemove", dibujarMouse);
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
    lienzo.beginPath();
    lienzo.lineWidth = 3;
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento) {
    var colorcito = "greem";
    var movimiento = 1;
    dibujarLinea("green", x - 1, y - 1, x + 1, y + 1, papel)

    switch (evento.keyCode) {
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
            break;

        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
            break;

        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
            break;

        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
            break;

        default:
            console.log("Otra tecla");
            break;

    }

    return evento;

}

function dibujarMouse(evento) {
    var colorcito = "greem";
    var movimiento = 1;
    x = evento.clientX;
    y = evento.clientY;

    dibujarLinea(colorcito, x - movimiento, y - movimiento, x + movimiento, y + movimiento, papel);

    return evento;

}
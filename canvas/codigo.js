var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;

var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");

boton.addEventListener("click", dibujoPorClick);

function dibujoPorClick() {
    var lineas = parseInt(texto.value);
    var l = 0;
    var yi, xf;
    var colorcito = "#FAA";
    var l2 = ancho;
    var espacio = ancho / lineas;
    var borde = ancho - 1;

    for (l = 0; l < lineas; l++) {
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea(colorcito, 0, yi, xf, ancho);
        dibujarLinea("blue", ancho, yi, xf, 0)
    }

    dibujarLinea(colorcito, 1, 1, 1, borde);
    dibujarLinea(colorcito, 1, borde, borde, borde);

    dibujarLinea("blue", borde, 1, borde, borde);
    dibujarLinea("blue", borde, borde, borde, borde);
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
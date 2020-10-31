/* var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
    url: "tile.png",
    cargaOK: false
};

var vaca = {
    url: "vaca.png",
    cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

function cargarFondo() {
    fondo.cargaOK = true;
    dibujar();
}

function cargarVacas() {
    vaca.cargaOK = true;
    dibujar();
}

function dibujar() {
    if (fondo.cargaOK) {
        papel.drawImage(fondo.imagen, 0, 0);
    }

    if (vaca.cargaOK) {
        var x = aleatorio(0, 420);
        var y = aleatorio(0, 420);
        papel.drawImage(vaca.imagen, x, y);
    }
}

function aleatorio(min, max) {
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}
 */

var teclas = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};

var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
    url: "tile.png",
    cargaOK: false
};

var cerdo = {
    url: "cerdo.png",
    cargaOK: false
};

var x = 100;
var y = 100;

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo)

function cargarFondo() {
    fondo.cargaOK = true;
    dibujar(x, y);
}

function cargarCerdo() {
    cerdo.cargaOK = true;
    dibujar;
}


function dibujar(x, y) {
    if (fondo.cargaOK) {
        papel.drawImage(fondo.imagen, 0, 0);
    }

    if (cerdo.cargaOK) {
        papel.drawImage(cerdo.imagen, x, y);
        document.addEventListener("keydown", moverTeclado);
    }

}

function moverTeclado(evento) {
    var movimiento = 10;

    switch (evento.keyCode) {
        case teclas.LEFT:
            dibujar(x - movimiento, y);
            x = x - movimiento;
            break;

        case teclas.UP:
            dibujar(x, y - movimiento);
            y = y - movimiento;
            break;

        case teclas.RIGHT:
            dibujar(x + movimiento, y);
            x = x + movimiento;
            break;

        case teclas.DOWN:
            dibujar(x, y + movimiento);
            y = y + movimiento;
            break;

        default:
            console.log("Otra tecla");
            break;
    }

}
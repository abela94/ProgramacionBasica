class Billete {

    constructor(v, c) {
        this.valor = v;
        this.cantidad = c;
        this.imagen = new Image();
        this.imagen.src = imagenes[this.valor];
    }

    mostrar() {
        resultado.innerHTML += '<img src="' + this.imagen.src + '" />';
        resultado.innerHTML += ("<p>");
        resultado.innerHTML += ("</strong>" + this.valor + "</strong><br />");
        resultado.innerHTML += ("Cantidad: " + this.cantidad + "<br />");
        resultado.innerHTML += ("</p><hr />");
    }

}

var imagenes = [];

imagenes[1] = "billete_1.jpg";
imagenes[5] = "billete_5.jpg";
imagenes[10] = "billete_10.jpg";
imagenes[20] = "billete_20.jpg";
imagenes[50] = "billete_50.jpg";

var caja = [];
var entregado = [];
caja.push(new Billete(50, 3));
caja.push(new Billete(20, 2));
caja.push(new Billete(10, 2));

var dinero;
var deposito;
var div = 0;
var papeles = 0;

var b = document.getElementById("extraer");
var b2 = document.getElementById("depositar");
var resultado = document.getElementById("res");
b.addEventListener("click", entregarDinero);
b2.addEventListener("click", depositarDinero);

function entregarDinero() {
    resultado.innerHTML = "";
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    for (var bi of caja) {

        if (dinero > 0) {
            div = Math.floor(dinero / bi.valor);

            if (div > bi.cantidad) {
                papeles = bi.cantidad;
            } else {
                papeles = div;
            }

            entregado.push(new Billete(bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles);
        }

    }

    if (dinero > 0) {
        resultado.innerHTML = "Soy un cajero malo, he sido malo y no puedo darte esa cantidad :(";
    } else {
        for (var e of entregado) {
            if (e.cantidad > 0) {
                console.log(e);
                e.mostrar();
            }
        }
    }
    for (var bi1 of caja) {
        for (var bi2 of entregado) {
            if (bi1.valor == bi2.valor) {
                bi1.cantidad -= bi2.cantidad;
                console.log("Quedan " + bi1.cantidad + " billetes de " + bi1.valor);
                break;
            }
        }
    }
    entregado = [];
    t.value = '';
}

function depositarDinero() {
    resultado.innerHTML = "";
    var u = document.getElementById("deposito");
    var v = document.getElementById("cantidad");
    deposito = parseInt(u.value);
    cantidad = parseInt(v.value);
    var existe = false;
    for (var b of caja) {
        if (b.valor == deposito) {
            b.cantidad += cantidad;
            existe = true;
            break;
        }
    }
    if (!existe) {
        caja.push(new Billete(deposito, cantidad));
    }
    u.value = '';
    v.value = '';
}
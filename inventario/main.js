const inventario = {
    camisas: {
        colores: {
            azul: 10,
            rojo: 3,
            verde: 8
        },
        precio: 20
    },
    pantalones: {
        colores: {
            azul: 6,
            rojo: 5,
            verde: 7
        },
        precio: 25
    },
    gorras: {
        colores: {
            azul: 15,
            rojo: 12,
            verde: 3
        },
        precio: 5
    },
    chaquetas: {
        colores: {
            azul: 22,
            rojo: 5,
            verde: 7
        },
        precio: 20
    },
    zapatos: {
        colores: {
            negro: 12,
            rojo: 4,
            blanco: 2
        },
        precio: 15
    },
    bolsos: {
        colores: {
            azul: 3,
            negro: 7,
            verde: 8
        },
        precio: 10
    }
};

console.table(inventario);

// Camisas

const cantidadCamisaAzul = document.querySelector('#cantidadCamisaAzul').innerHTML = inventario.camisas.colores.azul;

const cantidadCamisaRojo = document.querySelector('#cantidadCamisaRojo').innerHTML = inventario.camisas.colores.rojo;

const cantidadCamisaVerde = document.querySelector('#cantidadCamisaVerde').innerHTML = inventario.camisas.colores.verde;

const precioCamisa = document.querySelector('#precioCamisa').innerHTML = inventario.camisas.precio;

// Pantalones

const cantidadPantalonesAzul = document.querySelector('#cantidadPantalonesAzul').innerHTML = inventario.pantalones.colores.azul;

const cantidadPantalonesRojo = document.querySelector('#cantidadPantalonesRojo').innerHTML = inventario.pantalones.colores.rojo;

const cantidadPantalonesVerde = document.querySelector('#cantidadPantalonesVerde').innerHTML = inventario.pantalones.colores.verde;

const precioPantalones = document.querySelector('#precioPantalones').innerHTML = inventario.pantalones.precio;

// Gorras

const cantidadGorrasAzul = document.querySelector('#cantidadGorrasAzul').innerHTML = inventario.pantalones.colores.azul;

const cantidadGorrasRojo = document.querySelector('#cantidadGorrasRojo').innerHTML = inventario.pantalones.colores.rojo;

const cantidadGorrasVerde = document.querySelector('#cantidadGorrasVerde').innerHTML = inventario.gorras.colores.verde;

const precioGorras = document.querySelector('#precioGorras').innerHTML = inventario.gorras.precio;

// Chaquetas

const cantidadChaquetasAzul = document.querySelector('#cantidadChaquetasAzul').innerHTML = inventario.pantalones.colores.azul;

const cantidadChaquetasRojo = document.querySelector('#cantidadChaquetasRojo').innerHTML = inventario.pantalones.colores.rojo;

const cantidadChaquetasVerde = document.querySelector('#cantidadChaquetasVerde').innerHTML = inventario.chaquetas.colores.verde;

const precioChaquetas = document.querySelector('#precioChaquetas').innerHTML = inventario.chaquetas.precio;

// Zapatos

const cantidadZapatosNegro = document.querySelector('#cantidadZapatosNegro').innerHTML = inventario.zapatos.colores.negro;

const cantidadZapatosRojo = document.querySelector('#cantidadZapatosRojo').innerHTML = inventario.zapatos.colores.rojo;

const cantidadZapatosBlanco = document.querySelector('#cantidadZapatosBlanco').innerHTML = inventario.zapatos.colores.blanco;

const precioZapatos = document.querySelector('#precioZapatos').innerHTML = inventario.zapatos.precio;

// Bolsos

const cantidadBolsoAzul = document.querySelector('#cantidadBolsoAzul').innerHTML = inventario.bolsos.colores.azul;

const cantidadBolsoNegro = document.querySelector('#cantidadBolsoNegro').innerHTML = inventario.bolsos.colores.negro;

const cantidadBolsoVerde = document.querySelector('#cantidadBolsoVerde').innerHTML = inventario.bolsos.colores.verde;

const precioBolsos = document.querySelector('#precioBolsos').innerHTML = inventario.bolsos.precio;


// Formulario


const panel = document.querySelector('#panel');


const eliminar = document.querySelector('#eliminar');

// Obtener valores de los select

// articulo

const articulo = document.querySelector('#articulo');

const valorSeleccionado = articulo.options[articulo.selectedIndex].value;

console.log(valorSeleccionado);

// color

const color = document.querySelector('#color');

const valorSeleccionadoColor = color.options[color.selectedIndex].value;

console.log(valorSeleccionadoColor);

// cantidad

const cantidad = document.querySelector('#cantidad').value;

function soloNumeros(e) {
    key = e.keyCode || e.which;

    teclado = String.fromCharCode(key);

    numero = "0123456789";

    especiales = "8-37-38-46";

    tecladoEspecial = false;

    for (var i in especiales) {
        if (key == especiales[i]) {
            tecladoEspecial = true;
        }
    }

    if (numero.indexOf(teclado) == -1 && !tecladoEspecial) {
        return false;
    }
};


console.log(cantidad);


// Registrar


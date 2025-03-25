/* || DEFINICIÓN DE VARIABLES || */

let pantalla = document.querySelector('.resultado');
let expresionActual = '';
let resultado = 0;
let resultadoMostrado = false;


/* || RECONOCIMIENTO DE SELECCIÓN DE TECLAS || */

document.querySelectorAll('.tecla.numero').forEach(tecla => {
    tecla.addEventListener('click', (e) => {
        if (resultadoMostrado) {
            expresionActual = '';
            resultadoMostrado = false;
        }
        expresionActual += e.target.innerText;
        actualizarPantalla();
    });
});


/* || RECONOCIMIENTO DE OPERADORES || */

function agregarOperador(op) {
    if (resultadoMostrado) {
        resultadoMostrado = false;
    }
    if (expresionActual !== '') {
        expresionActual += ` ${op} `;
        actualizarPantalla();
    }
}


/* || OPERADORES || */

function sumar() { agregarOperador('+'); }
function restar() { agregarOperador('-'); }
function multiplicar() { agregarOperador('*'); }
function dividir() { agregarOperador('/'); }


/* || FUNCIONAMIENTO DE LA PANTALLA || */

function actualizarPantalla() {
    if (resultadoMostrado) {
        pantalla.innerHTML = expresionActual;
    } else {
        pantalla.innerHTML = `${expresionActual}<span class="pipelin"> |</span>`;
    }
}


/* || REALIZACIÓN DE LA OPERACIÓN || */

function operar() {
    try {
        let evaluacion = expresionActual.replace(/÷/g, '/');
        resultado = eval(evaluacion);
        expresionActual = resultado.toString();
        resultadoMostrado = true;
        actualizarPantalla();
    } catch (error) {
        pantalla.innerHTML = 'Error';
        expresionActual = '';
        resultadoMostrado = false;
    }
}


/* || FUNCIÓN DE LA TECLA DE BORRADO || */

function borrar() {
    expresionActual = '';
    resultado = 0;
    resultadoMostrado = false;
    actualizarPantalla();
}


/* || MOSTRAR EL RESULTADO DE LA OPERACIÓN || */

document.getElementById('.').addEventListener('click', () => {
    if (resultadoMostrado) {
        expresionActual = '0';
        resultadoMostrado = false;
    }
    expresionActual += '.';
    actualizarPantalla();
});

//const ya que son numeros que no seran modificados
//sera siempre el mismo a diferencia de var y let
const numeros = document.getElementsByName("numeros");//arreglo
//console.log(numeros);
const botonOperacion = document.getElementsByName("oper");//arreglo
const botonIgual = document.getElementsByName("igualdad")[0];
const botonReset = document.getElementsByName("borrar")[0];
//console.log(botonIgual);
let resultado = document.getElementById("resultado");
//console.log("resultado");
//definimos variable para generar calculos
let operActual = "";
let operAnterior = "";
let operacion = undefined;

//evento addEventListener() Registra un evento a un objeto en específico
//El método forEach() ejecuta la función indicada una vez por cada elemento del array.
//se utilizo addEventListener, pero tambien se prodria usar onclick.
numeros.forEach(function (boton) {
    boton.addEventListener("click", function () {
        agregarNumero(boton.innerHTML);
    })
});

botonOperacion.forEach(function (boton) {
    boton.addEventListener("click", function () {
        selectOperacion(boton.innerText);
        //alert(boton.innerHTML);
    })
});

botonIgual.addEventListener("click", function () {
    calcular();
    actualizarDisplay();
});
botonReset.addEventListener("click", function () {
    clear(); //metado de limpiar
    actualizarDisplay();
});
function selectOperacion(op) {
    if (operActual === "") return;
    if (operAnterior !== "") {
        calcular()
    }
    operacion = op.toString();
    operAnterior = operActual;
    operActual = "";
}
function calcular() {
    let calculo;//guardamos la operacion
    //Convierte (parsea) un argumento de tipo cadena y devuelve un número de punto flotante.
    const anterior = parseInt(operAnterior);
    const actual = parseInt(operActual);
    if (isNaN(anterior) || isNaN(actual)) return;
    switch (operacion) {
        case "+":
            calculo = anterior + actual;
            break;
        case "-":
            calculo = anterior - actual;
            break;
        case "x":
            calculo = anterior * actual;
            break;
        case "÷":
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    operActual = calculo;
    operacion = undefined;
    operAnterior = "";
}


function agregarNumero(num) {
    //toString() Devuelve una cadena que representa al objeto
    //cancatenamos texto no numeros
    operActual = operActual.toString() + num.toString();
    actualizarDisplay();
}
//clear inicializamos nuestra variables
function clear() {
    operActual = "";
    operAnterior = "";
    operacion = undefined;
}
function actualizarDisplay() {
    resultado.value = operActual;
}

clear();






//const ya que son numeros que no seran modificados
//sera siempre el mismo a diferencia de var y let
const numeros = document.getElementsByName("numeros");//arreglo
console.log(numeros);
const botonOperacion = document.getElementById("oper");//arreglo
const botonIgual = document.getElementsByName("igualdad")[0];
const botonReset = document.getElementsByName("reset")[0];
console.log(botonIgual);
let resultado = document.getElementById("resultado");
console.log("resultado");
//definimos variable para generar calculos
let operActual = "";
let perAnterior = "";
let operacion = undefined;

//evento addEventListener() Registra un evento a un objeto en específico
//El método forEach() ejecuta la función indicada una vez por cada elemento del array.
numeros.forEach(function(boton){
    boton.addEventListener("click", function(){
        agregarNumero(boton.innerHTML);
    })
});

botonOpercacion.forEach(function(boton){
    boton.addEventListener("click", function(){
        selectOperacion(boton.innerHTML);
    })
});

botonIgual.addEventListener("cick", function(){
    calcular();
    actualizarDisplay();
});
botonDelete.addEventListener("click", function(){
    clear(); //metado de limpiar
    actualizarDisplay();
});

function agregarNumero(num){
    operActual = operActual.toString() + num.toString();
    actualizarDisplay();
}
function actualizarDisplay(){
    resultado.value = operActual;
}




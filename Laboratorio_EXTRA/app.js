// Inputs

var secuencialNumber = () => parseInt(document.getElementById('firstNumber').value);
var parcialResult = 0; 

//var secondNumber = () => parseInt(document.getElementById('SecondNumber').value);

// Operaciones


function calcSumar() {    
    parcialResult = parcialResult + secuencialNumber();
    return parcialResult;
}

function calcRestar() {    
    parcialResult = parcialResult - secuencialNumber() ;
    return parcialResult;
}

function calcDividir() {    
    parcialResult =  parcialResult / secuencialNumber();
    return parcialResult;
}

function calcMultiplicar() {    
    parcialResult = parcialResult * secuencialNumber();
    return parcialResult;
}

// Obtenemos los diferentes resultados

var resultSumar = () => document.getElementById("result").innerText = calcSumar();
var resultRestar = () => document.getElementById("result").innerText = calcRestar();
var resultDividir = () => document.getElementById("result").innerText = calcDividir();
var resultMultiplicar = () => document.getElementById("result").innerText = calcMultiplicar();
var resultBorrar = () => document.getElementById("result").innerText = 'Resultado';


// E V E N T O S

document.getElementById('botonSumar').addEventListener("click", ifcalcSumar);
document.getElementById('botonRestar').addEventListener("click", ifcalcRestar);
document.getElementById('botonDividir').addEventListener("click", ifcalcDividir);
document.getElementById('botonMultiplicar').addEventListener("click", ifcalcMultiplicar);
document.getElementById('botonBorrar').addEventListener("click", ifcalcBorrar);


function ifcalcSumar() {
    if (!secuencialNumber()) {
        document.getElementById("result").innerText = "Error, debes incluir dos números"
    } else {
        /*resultSumar(); */      
        console.log(calcSumar());
        
    }
}

function ifcalcRestar() {
    if (!secuencialNumber()) {
        document.getElementById("result").innerText = "Error, debes incluir dos números"
    } else {
        resultRestar();
        console.log(calcDividir());
    }
}

function ifcalcDividir() {
    if (!secuencialNumber()) {
        document.getElementById("result").innerText = "Error, debes incluir dos números"
    } else {
        resultDividir();
         console.log(calcRestar());
    }
}

function ifcalcMultiplicar() {
    if (!secuencialNumber()) {
        document.getElementById("result").innerText = "Error, debes incluir dos números"
    } else {
        resultMultiplicar();
         console.log(calcMultiplicar());
    }
}

function ifcalcBorrar() {
    document.getElementById('firstNumber').value = '';
    document.getElementById('SecondNumber').value = '';
    resultBorrar();
}


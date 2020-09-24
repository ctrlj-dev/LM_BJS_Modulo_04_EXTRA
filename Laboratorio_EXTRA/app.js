// Inputs

var secuencialNumber = () => parseInt(document.getElementById('firstNumber').value);
var parcialResult = 0;
// Operaciones


function calcSumar() {
    if (!parcialResult) {
        parcialResult = secuencialNumber();
    } else {
        parcialResult = parcialResult + secuencialNumber();
    }
    return parcialResult;
}

function calcRestar() {
    if (!parcialResult) {
        parcialResult = secuencialNumber();
    } else {
        parcialResult = parcialResult - secuencialNumber();
    }
    return parcialResult;
}

function calcDividir() {
    if (!parcialResult) {
        parcialResult = secuencialNumber();        
    } else {
        parcialResult = parcialResult / secuencialNumber();
    }
    return parcialResult;
}

function calcMultiplicar() {
    if (!parcialResult) {
        parcialResult = secuencialNumber();
    } else {
        parcialResult = parcialResult * secuencialNumber();
    }
    return parcialResult;
}


// Obtenemos los diferentes resultados



var resultFinal = () => document.getElementById("result").innerText = parcialResult;
var resultBorrar = () => document.getElementById("result").innerText = 'Resultado';


// E V E N T O S

document.getElementById('botonSumar').addEventListener("click", ifcalcSumar);
document.getElementById('botonRestar').addEventListener("click", ifcalcRestar);
document.getElementById('botonDividir').addEventListener("click", ifcalcDividir);
document.getElementById('botonMultiplicar').addEventListener("click", ifcalcMultiplicar);
document.getElementById('botonResultado').addEventListener("click", ifcalcResult);
document.getElementById('botonBorrar').addEventListener("click", ifcalcBorrar);


function ifcalcSumar() {
    if (!secuencialNumber() ) {
        document.getElementById("result").innerText = "Error, debes incluir dos números"
    }else {
       calcSumar();                 
    }
}

function ifcalcRestar() {
    if (!secuencialNumber()) {
        document.getElementById("result").innerText = "Error, debes incluir dos números"
    } else {
        calcRestar()        
    }
}

function ifcalcDividir() {
    if (!secuencialNumber()) {
        document.getElementById("result").innerText = "Error, debes incluir dos números"
    } else {
        calcDividir();           
    }
}

function ifcalcMultiplicar() {
    if (!secuencialNumber()) {
        document.getElementById("result").innerText = "Error, debes incluir dos números"
    } else {
        calcMultiplicar();   
    }
}

function ifcalcResult() {
    if (!secuencialNumber()) {
        document.getElementById("result").innerText = "Error, debes incluir dos números"
    } else { 
        resultFinal();  
    }
}

function ifcalcBorrar() {
    document.getElementById('firstNumber').value = '';
    parcialResult = 0;
    resultBorrar();
}


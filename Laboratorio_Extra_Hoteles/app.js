var precioSpa = 20;
var parkingPerNight = 10;

var habType = () => document.getElementById('habType').value;
var habSpa = () => document.getElementById('habspa').checked;
var habOcupation = () => document.getElementById('habOcupation').value;
var habNights = () => document.getElementById('habNights').value;
var habParking = () => document.getElementById('habParking').value;

var habRate = '';
habOcupationRate = '';
         


document.getElementById('buttonCalculate').addEventListener('click', CalculateFinalPrice);



function CalculateFinalPrice() {
    habType();
    habSpa();
    habOcupation();
    habNights();
    habParking();
    console.log(habType());
    console.log(habSpa());
    console.log(habOcupation());
    console.log(habNights());
    console.log(habParking());
    habitacionRate();     
    calculateOcupation();
    calculateRateWithNights()
    parkingNightsPrice();


    document.getElementById('resultadoFinal').innerText = habRate;

    return habRate;
}


function habitacionRate() {    
    switch (habType()) {
        case 'standard':
            habRate = 100;
            break;
        case 'junior_suite':
            habRate = 120;
            break;
        case 'suite':
            habRate = 150;
            break;
    }
    if (habSpa() == true) {
        habRate = habRate + precioSpa;
    }    
    console.log('Tarifa previo descuento/aumento', habRate);      
} 

function calculateOcupation() {
    switch(habOcupation()) {       
        case 'individual':
            habOcupationRate = 0.75;          
            habRate = habRate * habOcupationRate;            
            break;
            case 'triple': 
            habOcupationRate = 1.25;
            habRate = habRate *  habOcupationRate;
            case 'doble':
            default:          
    }
    console.log('Tarifa despues de incremento/decremento', habRate);    
}

function calculateRateWithNights() {
    habRate = habRate * habNights();   
    console.log('Tarifa con noche', habRate);    
}

function parkingNightsPrice(){
    totalParking = parkingPerNight * habParking();
    habRate = habRate + totalParking;
    console.log('Tarifa con total con parking', habRate);   
}



// Tarifas
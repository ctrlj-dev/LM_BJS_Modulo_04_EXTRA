var precioSpa = 20;
var parkingPerNight = 10;

// Recogida de valores
var habType = () => document.getElementById('habType').value;
var habSpa = () => document.getElementById('habspa').checked;
var habOcupation = () => document.getElementById('habOcupation').value;
var habNights = () => document.getElementById('habNights').value;
var habParking = () => document.getElementById('habParking').value;

var habRate = '';
var habOcupationRate = '';

//Para que el precio se calcule al pulsar el botón calcular
//document.getElementById('buttonCalculate').addEventListener('click', CalculateFinalPrice);

// Para que el precio cambie al elegir un dato
document.getElementById('habType').addEventListener('change', CalculateFinalPrice);
document.getElementById('habspa').addEventListener('change', CalculateFinalPrice);
document.getElementById('habOcupation').addEventListener('change', CalculateFinalPrice);
document.getElementById('habNights').addEventListener('change', CalculateFinalPrice);
document.getElementById('habParking').addEventListener('change', CalculateFinalPrice);


//== TARIFAS ====================================//

// Tarifa de habitación y spa
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
    if (habSpa() == true && habRate != 0) {
        habRate = habRate + precioSpa;
    }
}

//Tarifa por tamaño de habitación
function calculateOcupation() {
    switch (habOcupation()) {
        case 'individual':
            habOcupationRate = 0.75;
            habRate = habRate * habOcupationRate;
            break;
        case 'triple':
            habOcupationRate = 1.25;
            habRate = habRate * habOcupationRate;
        case 'doble':
        default:
    }
    //console.log('Tarifa despues de incremento/decremento', habRate);    
}

//Tarifa por noche
function calculateRateWithNights() {
    habRate = habRate * habNights();
    //console.log('Tarifa con noche', habRate);    
}

// Tarifa de Parking por noche
function parkingNightsPrice() {
    totalParking = parkingPerNight * habParking();
    habRate = habRate + totalParking;
    //console.log('Tarifa con total con parking', habRate);   
}

//== FIN DE TARIFAS ====================================//

//Función de calculo total
function CalculateFinalPrice() {
    habType();
    habSpa();
    habOcupation();
    habNights();
    habParking();
    /*
    console.log(habType());
    console.log(habSpa());
    console.log(habOcupation());
    console.log(habNights());
    console.log(habParking());
    */
    habitacionRate();
    calculateOcupation();
    calculateRateWithNights()
    parkingNightsPrice();
    document.getElementById('resultadoFinal').innerText = 'Precio: ' + habRate + '€';
    return habRate;
}

//Llamamos a la funciónd de cálculo total para que empieze ya mostrando un resultado
// Aunque no es necesario así que por ahora oculto
//CalculateFinalPrice();

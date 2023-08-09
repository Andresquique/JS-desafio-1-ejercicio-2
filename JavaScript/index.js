let ingresoTotal;

function ingresoDato(input){
    do {
        input = Number(prompt(`declare su ingreso total`))}
    while (!input || input <= 0);
    return input;
}

ingresoTotal = ingresoDato(ingresoTotal);

alert(`Usted deberia destinar $${ingresoTotal*0.5} a gastos necesarios, $${ingresoTotal*0.3} a gastos opcionales y $${ingresoTotal*0.2} para ahorro e inversion`);

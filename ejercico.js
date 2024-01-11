function convertirTemperatura() {
    while (true) {
        let valorIngresadongresado = prompt("Ingrese la temperatura en grados Celsius (o escriba `salir` para salir):");

        if (valorIngresado.toLowerCase() === "salir") {
            return;
        }

        let gradosCelsius = parseFloat(valorIngresadongresado);

        if (isNaN(gradosCelsius)) {
            alert("Ingrese un número válido.");
            continue; // Continuar con el siguiente ciclo del bucle while
        }

        let fahrenheit = (gradosCelsius * 9/5) + 32;
        let kelvin = gradosCelsius + 273.15;

        // Mostrar resultados en el DOM
        document.write(`Temperatura en Fahrenheit: ${fahrenheit.toFixed(2)} °F <br>`);
        document.write(`Temperatura en Kelvin: ${kelvin.toFixed(2)} K <br>`);
    }
}

convertirTemperatura();
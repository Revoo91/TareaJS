
let temperaturaCelsius = parseFloat(prompt("Ingrese la temperatura en Celsius:"));


let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;


console.log("La temperatura en Fahrenheit es: " + temperaturaFahrenheit);


if (temperaturaFahrenheit >= 14 && temperaturaFahrenheit < 32) {
  console.log("Temperatura baja");
} else if (temperaturaFahrenheit >= 32 && temperaturaFahrenheit < 68) {
  console.log("Temperatura adecuada");
} else if (temperaturaFahrenheit >= 68 && temperaturaFahrenheit < 96) {
  console.log("Temperatura alta");
} else {
  console.log("Temperatura desconocida");
}

let cantidadNegativos = 0;
let cantidadPositivos = 0;
let cantidadMultiplos15 = 0;
let acumuladoPares = 0;

for (let i = 0; i < 10; i++) {
  let valor = parseInt(prompt("Ingrese un valor entero:"));

  if (valor < 0) {
    cantidadNegativos++;
  }

  if (valor > 0) {
    cantidadPositivos++;
  }

  if (valor % 15 === 0) {
    cantidadMultiplos15++;
  }

  if (valor % 2 === 0) {
    acumuladoPares += valor;
  }
}

console.log("Cantidad de valores negativos ingresados: " + cantidadNegativos);
console.log("Cantidad de valores positivos ingresados: " + cantidadPositivos);
console.log("Cantidad de múltiplos de 15: " + cantidadMultiplos15);
console.log("Valor acumulado de los números pares: " + acumuladoPares);

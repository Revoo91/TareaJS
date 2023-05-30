function encontrarNumeroMayor() {
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
  
    let resultado;
  
    if (isNaN(num1) || isNaN(num2)) {
      resultado = "Ingrese valores numéricos válidos";
    } else if (num1 >= num2) {
      resultado = num1;
    } else if (num2 > num1) {
      resultado = num2;
    } else {
      resultado = "Los números son iguales";
    }
  
    alert("El número mayor es: " + resultado);
  }
 encontrarNumeroMayor()  
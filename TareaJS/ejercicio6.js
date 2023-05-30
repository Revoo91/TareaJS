function lugaresTuristicos() {
    let miLugarTuristico = prompt("Ingrese el lugar turístico (Costa del Sol, Panchimalco, Puerto el Triunfo) o el número correspondiente (1, 2, 3):");
  
    let viaje1;
    let precioDescuento;
  
    if (miLugarTuristico.toLowerCase() === "costa del sol" || miLugarTuristico === "1") {
      viaje1 = 30;
      precioDescuento = viaje1 * (1 - 0.05); 
      document.write(" Costa del Sol <br> Precio = $30 <br> 5% de descuento <br> total a pagar <br>  $" + precioDescuento);
    } else if (miLugarTuristico.toLowerCase() === "panchimalco" || miLugarTuristico === "2") {
      segundoVaije = 40;
      segundoPrecio = segundoVaije * (1 - 0.1);
      document.write("Costa del Sol <br> Precio = $40 <br> 10% de descuento <br> total a pagar <br>  $" + segundoPrecio);
    } else if (miLugarTuristico.toLowerCase() === "puerto el triunfo" || miLugarTuristico === "3") {
      tercerViaje = 35;
      tercerPrecio = tercerViaje * (1 - 0.15);
      document.write("Costa del Sol <br> Precio = $35 <br> 15% de descuento <br> total a pagar <br>  $" + tercerPrecio);
    } else {
      document.write("Lugar turístico no válido");
    }
  }
  
  lugaresTuristicos();
  
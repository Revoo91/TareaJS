
function calcularNotaFinal(nombre, carnet) {
    
    const examen = parseFloat(prompt("Ingrese la calificación del examen:"));
    const tareas = parseFloat(prompt("Ingrese cuantas tareas ha presentado en el mes:"));
    const notasPromedioTareas = parseFloat(prompt("Ingrese promediode notas de tareas"))
    const asistencia = parseFloat(prompt("Ingrese la calificación de la asistencia:"));
    const investigacion = parseFloat(prompt("Ingrese la calificación de la investigación:"));
  
    // Calcula la nota final
    const notaExamen = examen * 0.2;
    const notaTareas = (tareas  10 (notasPromedioTareas));
    const notaAsistencia = (asistencia - 30)* 0.1;
    const notaInvestigacion = investigacion * 0.3;
    const notaFinal = notaExamen + notaTareas + notaAsistencia + notaInvestigacion;
  
    // Muestra los datos del alumno
    console.log("Nombre: " + nombre);
    console.log("Carnet: " + carnet);
    console.log("Nota final: " + notaFinal);

    document.write("<h2>Nombre: " + nombre + "</h2>");
  document.write("<h2>Carnet: " + carnet + "</h2>");
  document.write("<h2>Nota final: " + notaFinal + "</h2>");
  }
  
  // Ejemplo de uso
  calcularNotaFinal();
 
  
function calcularNota(){

  document.getElementById('calcular-btn').addEventListener('click', () => {
    const estudiante = document.getElementById('input-estudiante').value;
    const examen1 = parseFloat(document.getElementById('input-examen1').value);
    const examen2 = parseFloat(document.getElementById('input-examen2').value);

    const resultadoExamen1 = (examen1 * 0.3).toFixed(1);
    const resultadoExamen2 = (examen2 * 0.7).toFixed(1);
    const notaFinal = (parseFloat(resultadoExamen1) + parseFloat(resultadoExamen2)).toFixed(1);
    

    document.getElementById('nombre-td').textContent = estudiante;
    document.getElementById('examen1-td').textContent = resultadoExamen1;
    document.getElementById('examen2-td').textContent = resultadoExamen2;
    document.getElementById('nota-final-td').textContent = notaFinal;

    const cardResultado = document.getElementById('card-resultado');

    if (notaFinal >= 6) {
      cardResultado.classList.add('bg-success');
    } else {
      cardResultado.classList.add('bg-danger');
    }
    

  });

}
 calcularNota()
  
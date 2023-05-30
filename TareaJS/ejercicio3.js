function mostrarNombre() {
    let nombreEmpleado = document.getElementById('nombreEmpleadoInput').value;
    document.getElementById('nombreEmpleado').textContent = nombreEmpleado;
  
    let tabla = document.querySelector('.table');
    let empleadoCelda = tabla.rows[1].cells[1]; 
    empleadoCelda.textContent = nombreEmpleado;
  }

  

  function mostrarSalario() {
    let salarioEmpleado = document.getElementById('salarioEmpleadoInput').value;
    document.getElementById('salarioEmpleado').textContent = salarioEmpleado;
  
    let tabla = document.querySelector('.table');
    let salarioActual = tabla.rows[1].cells[2]; 
    salarioActual.textContent = salarioEmpleado;
  }
  
  

  function aumentoSalario() {
    let salarioActual = parseFloat(document.getElementById('salarioEmpleado').textContent);
    let nuevoSalario = salarioActual *  (1 + 0.15);
  
    document.getElementById('nuevoSalario').textContent = nuevoSalario.toFixed(2);
  
    let tabla = document.querySelector('.table');
    let empleadoAumento = tabla.rows[1].cells[3];
    empleadoAumento.textContent = '$' + nuevoSalario.toFixed(2);
  }
  
  function aumentoSalario2() {
    let salarioActual = parseFloat(document.getElementById('salarioEmpleado').textContent);
    let nuevoSalario = salarioActual *  (1 + 0.3);
  
    document.getElementById('nuevoSalario').textContent = nuevoSalario.toFixed(2);
  
    let tabla = document.querySelector('.table');
    let empleadoAumento = tabla.rows[1].cells[3];
    empleadoAumento.textContent = '$' + nuevoSalario.toFixed(2);
  }


  function aumentoSalario3() {
    let salarioActual = parseFloat(document.getElementById('salarioEmpleado').textContent);
    let nuevoSalario = salarioActual * (1 + 0.1);
  
    document.getElementById('nuevoSalario').textContent = nuevoSalario.toFixed(2);
  
    let tabla = document.querySelector('.table');
    let empleadoAumento = tabla.rows[1].cells[3];
    empleadoAumento.textContent = '$' + nuevoSalario.toFixed(2);
  }

  function aumentoSalario4() {
    let salarioActual = parseFloat(document.getElementById('salarioEmpleado').textContent);
    let nuevoSalario = salarioActual * (1 + 0.2);
  
    document.getElementById('nuevoSalario').textContent = nuevoSalario.toFixed(2);
  
    let tabla = document.querySelector('.table');
    let empleadoAumento = tabla.rows[1].cells[3];
    empleadoAumento.textContent = '$' + nuevoSalario.toFixed(2);
  }




  
  // Asociar eventos onclick a las opciones del menú desplegable
  document.querySelector('.empleadoA').onclick = aumentoSalario;
  document.querySelector('.empleadoB').onclick = aumentoSalario2;
  document.querySelector('.empleadoC').onclick = aumentoSalario3;
  document.querySelector('.empleadoD').onclick = aumentoSalario4;
  
  document.getElementById('nombreEmpleadoInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      mostrarNombre();
      event.preventDefault();
    }
  });
  
  document.getElementById('salarioEmpleadoInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      mostrarSalario();
      event.preventDefault();
    }
  });
  
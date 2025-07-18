function registrar() {
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const mensajeExito = document.getElementById('mensajeExito');
    const mensajeEmpleado = document.getElementById('mensajeEmpleado');
  
    if (nombre === '' || correo === '') {
      alert("Por favor completa todos los campos.");
      return;
    }
  

    console.log("Registro enviado al empleado:");
    console.log("Nombre:", nombre);
    console.log("Correo:", correo);
  
    mensajeEmpleado.textContent = 📩 EMPLEADO: Se ha registrado un nuevo usuario: ${nombre}, ${correo};
    mensajeExito.classList.remove('oculto');
  }
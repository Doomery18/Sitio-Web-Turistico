document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que el formulario se envíe
   
    // Simulamos una validación exitosa
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
   
    // En una aplicación real, aquí harías una verificación con el servidor
    if(email && password) {
        document.getElementById('message').textContent = 'Acceso concedido';
        document.getElementById('message').className = 'success';
       
        // Redirigir después de 1.5 segundos (simulación)
        setTimeout(() => {
            alert('Acceso concedido. Redirigiendo...');
       // Descomenta para redirección real
        }, 1500);
    }
});

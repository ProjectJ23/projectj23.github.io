document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the form from being submitted normally
 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirm_password = document.getElementById('confirm_password').value;
    const admin = false;
    var date = new Date();
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); // Enero es 0!
    var yyyy = date.getFullYear();

    date = yyyy + '-' + mm + '-' + dd;


    
    // Validar el correo
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(!regex.test(username)) {
        alert("Correo no válido");
        return;
    }
 
    // Validar las contraseñas
    if(password != confirm_password) {
        alert("Las contraseñas no coinciden");
        return;
    }
 
    // Si todo está bien, enviar los datos a la API
    fetch('http://localhost:8081/api/v1/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password,date,admin })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('hubo un error en el registro');
        }
        return response.json();
    })
    .then(data => {
        // Guarda el token de autenticación en el almacenamiento local
        console.log("exitosamente registrado")
        // Redirige al usuario a otra página
       window.location.href = '/login-register/login/login.html';
    })
    .catch(error => {
        // Muestra un mensaje de error al usuario
        console.error('Error:', error);
    });
 })
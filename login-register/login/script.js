document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the form from being submitted normally
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    fetch('http://localhost:8081/api/v1/users/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ username, password })
})
.then(response => {
  if (!response.ok) {
    throw new Error('Invalid credentials');
  }
  return response.json();
})
.then(data => {
  // Guarda el token de autenticación en el almacenamiento local
  console.log("siga pa lante mi rey")
  localStorage.setItem('username',data.username)
  localStorage.setItem('admin',data.admin)
  localStorage.setItem('token', data.token);
  window.location.href = '/';
})
.catch(error => {
  // Muestra un mensaje de error al usuario
  console.error('Error:', error);
});
})

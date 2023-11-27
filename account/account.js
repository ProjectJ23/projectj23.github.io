document.getElementsByName('logout')[0].addEventListener('click', function(e) {
    localStorage.clear()
    window.location.href = '/';
})
let username = localStorage.getItem('username');

// Inserta el nombre de usuario en el saludo
document.getElementById('user').innerHTML = 'Hola!! ' + username;


var admin = localStorage.getItem('admin') === 'true';

// Obtén el botón 'cargarProducto'
var botonCargarProducto = document.getElementById('cargarProducto');

// Si 'admin' es verdadero, muestra el botón, de lo contrario, ocúltalo
if (admin) {
   botonCargarProducto.style.display = 'block';
} else {
   botonCargarProducto.style.display = 'none';
}
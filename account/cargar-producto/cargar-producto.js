document.addEventListener('DOMContentLoaded', function() {
document.querySelector('input[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the form from being submitted normally
    const titulo = document.getElementById('titulo').value;
    const imagen = document.getElementById('imagen').value;
    const categoria = document.getElementById('categoriaId').value;
    const precio = document.getElementById('precio').value;
      // Convert the values to numbers
      const categoriaNumber = Number(categoria);
      const precioNumber = Number(precio);

      console.log(JSON.stringify({ titulo, imagen, categoria: categoriaNumber, precio: precioNumber }));
      fetch('http://localhost:8081/api/v1/products', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ titulo, imagen, categoria: categoriaNumber, precio: precioNumber })

  
})  
.then(response => {
  if (!response.ok) {
    throw new Error('There was an error when trying to add the product ');
  }

})
.then(data => {
  // Guarda el token de autenticación en el almacenamiento local
  console.log("A product has been added")
  console.log(data)
})
.catch(error => {
  // Muestra un mensaje de error al usuario
  console.error('Error:', error);
});
})})
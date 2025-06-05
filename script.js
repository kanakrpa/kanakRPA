document.getElementById('contacto-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;

  fetch("https://script.google.com/macros/s/TU_WEB_APP_URL/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `nombre=${encodeURIComponent(nombre)}&email=${encodeURIComponent(email)}&mensaje=${encodeURIComponent(mensaje)}`
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('mensaje-confirmacion').textContent = "¡Mensaje enviado con éxito!";
    document.getElementById('contacto-form').reset();
  })
  .catch(error => {
    document.getElementById('mensaje-confirmacion').textContent = "Error al enviar. Intenta de nuevo.";
    console.error("Error:", error);
  });
});


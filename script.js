document.getElementById("contacto-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Detiene el envío automático

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const mensajeExito = document.getElementById("mensaje-confirmacion");
    const reverseP = document.getElementById("reverse"); // Solo si existe este ID
    if (reverseP) {
      reverseP.setAttribute("dir", "rtl");
    }

    // Validar campos vacíos
    if (!nombre || !email || !mensaje) {
        mensajeExito.textContent = "Por favor, completa todos los campos.";
        mensajeExito.style.color = "red";
        return;
    }

    // Validar correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        mensajeExito.textContent = "Por favor, ingresa un correo válido.";
        mensajeExito.style.color = "red";
        return;
    }

    // Enviar datos al Web App de Google Apps Script
    const url = "https://script.google.com/macros/s/AKfycbx-HwLAMpZjoWOT_avFvPXo6C67a6XcVPuXdWrHnxe_fMw4P6IUQpc8vq7k6ovuKx1WYw/exec"; // <-- Reemplaza con tu URL real

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre: nombre,
            email: email,
            mensaje: mensaje
        })
    })
    .then(response => response.json())
    .then(data => {
        if(data.result === "success") {
            mensajeExito.textContent = "¡Mensaje enviado con éxito!";
            mensajeExito.style.color = "green";
            // Opcional: limpiar formulario
            document.getElementById("contacto-form").reset();
        } else {
            mensajeExito.textContent = "Error al enviar mensaje: " + data.message;
            mensajeExito.style.color = "red";
        }
    })
    .catch(error => {
        console.error('Error:', error);
        mensajeExito.textContent = "Error en la comunicación con el servidor.";
        mensajeExito.style.color = "red";
    });
});

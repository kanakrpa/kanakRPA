document.getElementById("contacto-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const mensajeExito = document.getElementById("mensaje-confirmacion");

    // Validar campos vacíos
    if (!nombre || !email || !mensaje) {
        mensajeExito.textContent = "Por favor, completa todos los campos.";
        mensajeExito.style.color = "red";
        return;
    }

    // Validar correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        mensajeExito.textContent = "Por favor, ingresa un correo válido.";
        mensajeExito.style.color = "red";
        return;
    }

    const form = event.target;
    const url = "https://script.google.com/macros/s/AKfycbx-HwLAMpZjoWOT_avFvPXo6C67a6XcVPuXdWrHnxe_fMw4P6IUQpc8vq7k6ovuKx1WYw/exec";

    const formData = new FormData(form);

    fetch(url, {
        method: "POST",
        body: formData,
        // No headers custom para evitar preflight OPTIONS
    })
    .then(response => response.text())
    .then(data => {
        mensajeExito.textContent = "Mensaje enviado correctamente";
        mensajeExito.style.color = "green";
        form.reset();
    })
    .catch(error => {
        console.error("Error:", error);
        mensajeExito.textContent = "Error al enviar el mensaje";
        mensajeExito.style.color = "red";
    });
});


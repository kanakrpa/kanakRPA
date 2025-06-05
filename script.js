
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
    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("email", email);
    formData.append("mensaje", mensaje);

    const url = "https://script.google.com/macros/s/AKfycbxFpWrt6ZHtQM2xyUb2by97jUUJkbtMaadwJBgQuGfMa0U7pcdVmklRGKMOpllYgdi_rg/exec"; // <-- Reemplaza con tu URL real

    fetch(url, {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        mensajeExito.textContent = "Mensaje enviado correctamente.";
        mensajeExito.style.color = "green";
        document.getElementById("contacto-form").reset();
    })
    .catch(error => {
        mensajeExito.textContent = "Ocurrió un error al enviar el mensaje.";
        mensajeExito.style.color = "red";
        console.error("Error:", error);
    });
});
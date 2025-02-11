document.getElementById("contacto-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío por defecto

    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();
    let mensajeExito = document.getElementById("mensaje-confirmacion"); // ID correcto

    // Validación de campos vacíos
    if (!nombre || !email || !mensaje) {
        mensajeExito.textContent = "Por favor, completa todos los campos.";
        mensajeExito.style.color = "red";
        return;
    }

    // Validación de email con expresión regular
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        mensajeExito.textContent = "Por favor, ingresa un correo válido.";
        mensajeExito.style.color = "red";
        return;
    }

    // Guardar en localStorage
    let contactos = JSON.parse(localStorage.getItem("contactos")) || [];
    contactos.push({ nombre, email, mensaje });
    localStorage.setItem("contactos", JSON.stringify(contactos));

    // Mostrar mensaje de éxito con el nombre del usuario
    mensajeExito.textContent = `¡Gracias, ${nombre}! Tus datos han sido enviado con éxito.`;
    mensajeExito.style.color = "black";

    // Limpiar el formulario después de enviar
    document.getElementById("contacto-form").reset();
});
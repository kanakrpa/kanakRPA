document.getElementById("descubrir-btn").addEventListener("click", function() {
    alert("¡Bienvenido a Kanak! Descubre cómo podemos optimizar tu empresa.");
});

// Formulario de contacto
document.getElementById("contacto-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;

    if (nombre && email && mensaje) {
        document.getElementById("mensaje-confirmacion").innerText = "¡Gracias por tu mensaje, " + nombre + "! Te responderemos pronto.";
        document.getElementById("contacto-form").reset();
    } else {
        alert("Por favor, completa todos los campos.");
    }
});

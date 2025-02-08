document.getElementById("contacto-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;

    if (nombre && email && mensaje) {
        let respuesta = await fetch("https://script.google.com/macros/s/AKfycbwmRFAyFiQIAtgIZ9CaP106LM0gttDMGXoNtKhEQozIE13y16xb-EMCyLdCwqomO7-2ZQ/exec", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nombre, email, mensaje })
        });

        if (respuesta.ok) {
            document.getElementById("mensaje-confirmacion").innerText = "¡Gracias por tu mensaje, " + nombre + "! Te responderemos pronto.";
            document.getElementById("contacto-form").reset();
        } else {
            alert("Error al enviar datos.");
        }
    } else {
        alert("Por favor, completa todos los campos.");
    }
});

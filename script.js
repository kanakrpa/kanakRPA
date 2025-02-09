document.getElementById("contacto-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    let formData = new FormData();
    formData.append("nombre", document.getElementById("nombre").value);
    formData.append("email", document.getElementById("email").value);
    formData.append("mensaje", document.getElementById("mensaje").value);

    let respuesta = await fetch("https://script.google.com/macros/s/AKfycbwmRFAyFiQIAtgIZ9CaP106LM0gttDMGXoNtKhEQozIE13y16xb-EMCyLdCwqomO7-2ZQ/exec", {
        method: "POST",
        body: formData
    });

    if (respuesta.ok) {
        document.getElementById("mensaje-confirmacion").innerText = "¡Gracias por tu mensaje!";
        document.getElementById("contacto-form").reset();
    } else {
        alert("Error al enviar datos.");
    }
});

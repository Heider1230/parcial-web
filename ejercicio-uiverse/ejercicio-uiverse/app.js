// Interacciones propias de la landing page.

document.getElementById("btnComprar").addEventListener("click", () => {
  alert("¡Gracias por comprar Café Andino!");
});

document.getElementById("btnEnviar").addEventListener("click", () => {
  const correo = document.getElementById("correo").value.trim();
  const promociones = document.getElementById("promociones").checked;
  const mensaje = document.getElementById("mensaje");

  if (!correo) {
    mensaje.textContent = "Escribe tu correo para continuar.";
    return;
  }

  mensaje.textContent = promociones
    ? "¡Suscripción realizada! Recibirás promociones."
    : "¡Suscripción realizada correctamente!";
});

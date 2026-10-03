

const { animate, stagger, createTimeline } = anime;

// ----------------------------------------------------------
// 1. ANIMACIÓN PRINCIPAL CON createTimeline()
// ----------------------------------------------------------
function iniciarAnimacion() {

  document.querySelectorAll(
    ".titulo, .subtitulo, .producto, .card, .precio, #btnComprar"
  ).forEach(elemento => {
    elemento.style.opacity = "0";
  });

  const tl = createTimeline({
    defaults: {
      duration: 800,
      ease: "outExpo"
    }
  });

  tl.add(".titulo", {
      opacity: [0, 1],
      y: [-80, 0],
      rotate: [-8, 0]
    })

    .add(".subtitulo", {
      opacity: [0, 1],
      y: [30, 0]
    }, "-=550")

    .add(".producto", {
      opacity: [0, 1],
      scale: [0.75, 1],
      y: [50, 0]
    }, "-=350")

    // El precio aparece con rebote.
    .add(".precio", {
      opacity: [0, 1],
      scale: [0.5, 1.15, 1],
      duration: 900,
      ease: "outElastic(1, .6)"
    }, "-=350")

    .add("#btnComprar", {
      opacity: [0, 1],
      y: [25, 0],
      scale: [0.8, 1]
    }, "-=550")

    // stagger hace aparecer las tarjetas una por una.
    .add(".card", {
      opacity: [0, 1],
      y: [70, 0],
      rotate: [-4, 0],
      delay: stagger(160),
      duration: 700,
      ease: "outExpo"
    }, "-=350");
}

// ----------------------------------------------------------
// 2. TELÉFONO FLOTANDO
// ----------------------------------------------------------
animate(".producto-img", {
  y: [-10, 10],
  rotate: [-2, 2],
  duration: 1600,
  direction: "alternate",
  loop: true,
  ease: "inOutQuad"
});

// ----------------------------------------------------------
// 3. EFECTO DE ESCALA DEL TELÉFONO
// ----------------------------------------------------------
animate(".producto-img", {
  scale: [1, 1.04, 1],
  duration: 2200,
  loop: true,
  ease: "inOutSine"
});

// ----------------------------------------------------------
// 4. HOVER EN LAS TARJETAS
// ----------------------------------------------------------
document.querySelectorAll(".card").forEach((card, indice) => {

  card.addEventListener("mouseenter", () => {

    animate(card, {
      scale: 1.08,
      y: -8,
      rotate: indice % 2 === 0 ? 2 : -2,
      duration: 350,
      ease: "outQuad"
    });

    animate(card.querySelector("span"), {
      scale: [1, 1.3, 1],
      rotate: "1turn",
      duration: 700,
      ease: "outElastic(1, .5)"
    });
  });

  card.addEventListener("mouseleave", () => {

    animate(card, {
      scale: 1,
      y: 0,
      rotate: 0,
      duration: 350,
      ease: "outQuad"
    });
  });

  // Clic: pequeño salto.
  card.addEventListener("click", () => {
    animate(card, {
      scale: [1, 0.92, 1.06, 1],
      duration: 650,
      ease: "outElastic(1, .7)"
    });
  });
});

// ----------------------------------------------------------
// 5. CLIC EN EL TELÉFONO: GIRO COMPLETO
// ----------------------------------------------------------
document.querySelector(".producto-img").addEventListener("click", () => {

  animate(".producto-img", {
    rotate: "+=1turn",
    scale: [1, 1.15, 1],
    duration: 1000,
    ease: "outElastic(1, .5)"
  });
});

// ----------------------------------------------------------
// 6. BOTÓN COMPRAR
// ----------------------------------------------------------
document.getElementById("btnComprar").addEventListener("click", (e) => {

  animate(e.currentTarget, {
    scale: [1, 0.85, 1.15, 1],
    rotate: [0, -4, 4, 0],
    duration: 700,
    ease: "outElastic(1, .5)"
  });

  const mensaje = document.getElementById("mensaje");
  mensaje.textContent = "¡Smart X1 agregado correctamente!";

  animate(mensaje, {
    opacity: [0, 1],
    y: [30, 0],
    scale: [0.8, 1],
    duration: 650,
    ease: "outBack"
  });

  // Pequeña celebración en las tarjetas.
  animate(".card", {
    y: [-5, 0],
    delay: stagger(80),
    duration: 500,
    ease: "outElastic(1, .6)"
  });
});

// ----------------------------------------------------------
// 7. BOTÓN REPRODUCIR DE NUEVO
// ----------------------------------------------------------
document.getElementById("btnRepetir").addEventListener("click", (e) => {

  animate(e.currentTarget, {
    scale: [1, 0.85, 1.1, 1],
    duration: 600,
    ease: "outElastic(1, .5)"
  });

  iniciarAnimacion();
});

// ----------------------------------------------------------
// 8. TÍTULO: EFECTO AL PASAR EL MOUSE
// ----------------------------------------------------------
document.querySelector(".titulo").addEventListener("mouseenter", () => {

  animate(".titulo", {
    letterSpacing: ["0px", "8px", "0px"],
    duration: 800,
    ease: "outQuad"
  });
});

// ----------------------------------------------------------
// 9. SUBTÍTULO: EFECTO AL HACER CLIC
// ----------------------------------------------------------
document.querySelector(".subtitulo").addEventListener("click", () => {

  animate(".subtitulo", {
    x: [-15, 15, -10, 10, 0],
    duration: 700,
    ease: "outElastic(1, .5)"
  });
});

// Iniciar.
iniciarAnimacion();




 app.js 
// 1. Extraer las funciones que vamos a usar del objeto global "anime" 
const { animate, stagger, createTimeline } = anime; 
  
// 2. Animación de las barras de progreso y de los contadores de porcentaje 
function animarBarras() { 
  document.querySelectorAll('.card').forEach((card, i) => { 
    const barra = card.querySelector('.progreso'); 
    const texto = card.querySelector('.porcentaje'); 
    const valor = Number(barra.dataset.valor); // lee data-valor del HTML 
    const contador = { n: 0 };                  // Anime.js también anima objetos JS 
  
    animate(barra, { 
      width: ['0%', `${valor}%`],  // [desde, hasta] 
      duration: 1200, 
      delay: i * 150, 
      ease: 'inOutQuad' 
    }); 
  
    animate(contador, { 
      n: valor, 
      duration: 1200, 
      delay: i * 150, 
      ease: 'inOutQuad', 
      onUpdate: () => { texto.textContent = `${Math.round(contador.n)}%`; } 
    }); 
  }); 
} 
Actividad de profundización – Librerías Frontend · Página 6 
  
// 3. Secuencia de entrada con una línea de tiempo (timeline) 
function iniciarAnimacion() { 
  // Reiniciar valores para poder repetir la animación 
  document.querySelectorAll('.progreso').forEach(b => (b.style.width = '0%')); 
  document.querySelectorAll('.porcentaje').forEach(t => (t.textContent = '0%')); 
  
  const tl = createTimeline({ 
    defaults: { duration: 800, ease: 'outExpo' }, 
    onComplete: animarBarras        // cuando termine la entrada, se llenan las barras 
  }); 
  
  tl.add('.titulo',    { opacity: [0, 1], y: [-40, 0] }) 
    .add('.subtitulo', { opacity: [0, 1], y: [-20, 0] }, '-=500') 
    .add('.card',      { opacity: [0, 1], scale: [0.8, 1], delay: stagger(150) }, '-=300'); 
} 
  
// 4. Micro-interacción: efecto al pasar el mouse sobre cada tarjeta 
document.querySelectorAll('.card').forEach(card => { 
  card.addEventListener('mouseenter', () => { 
    animate(card, { scale: 1.05, borderColor: '#38bdf8', duration: 300, ease: 'outQuad' }); 
  }); 
  card.addEventListener('mouseleave', () => { 
    animate(card, { scale: 1, borderColor: '#334155', duration: 300, ease: 'outQuad' }); 
  }); 
}); 
  
// 5. Botón para repetir: rebote elástico + reiniciar la secuencia 
document.getElementById('btnRepetir').addEventListener('click', (e) => { 
  animate(e.currentTarget, { scale: [0.9, 1], duration: 600, ease: 'outElastic(1, .5)' }); 
  iniciarAnimacion(); 
}); 
  
// 6. Arrancar al cargar la página 
iniciarAnimacion();
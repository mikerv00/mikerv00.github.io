
      ScrollReveal().reveal('.hero h1', {
        duration: 2000,
        origin: 'bottom',
        distance: '50px',
        delay: 200
      });
      ScrollReveal().reveal('.ubicacion h2', {
        duration: 2000,
        origin: 'left',
        distance: '50px'
      });
      ScrollReveal().reveal('.ubicacion p', {
        duration: 2000,
        origin: 'right',
        distance: '50px',
        delay: 100
      });
      ScrollReveal().reveal('.mapa iframe', {
        duration: 2000,
        scale: 0.85,
        delay: 300
      });
      ScrollReveal().reveal('.beneficio', {
        duration: 2000,
        origin: 'bottom',
        distance: '50px',
        interval: 200
      });
document.addEventListener("DOMContentLoaded", function() {
    const preguntas = document.querySelectorAll(".pregunta");
    preguntas.forEach(function(pregunta) {
        pregunta.addEventListener("click", function() {
            const respuesta = pregunta.querySelector(".respuesta");
            if (respuesta.style.display === "none" || respuesta.style.display === "") {
                respuesta.style.display = "block";
            } else {
                respuesta.style.display = "none";
            }
        });
    });
});

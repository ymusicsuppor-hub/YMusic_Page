// Esperar a que el DOM esté completamente cargado antes de inicializar AOS
document.addEventListener("DOMContentLoaded", function() {
    // Inicialización de la librería de animaciones AOS
    AOS.init({
        duration: 800,   // Duración de la animación en ms
        once: true,      // Si true, la animación solo se ejecuta la primera vez que se hace scroll
        offset: 100      // Distancia (en px) desde el borde inferior de la pantalla para activar la animación
    });
});

/* --- BLOQUEO DE INSPECCIÓN DE CÓDIGO --- */

// 1. Bloquear el clic derecho del ratón
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// 2. Bloquear atajos de teclado comunes para herramientas de desarrollo
document.addEventListener('keydown', function(event) {
    // Bloquear F12
    if (event.key === 'F12' || event.keyCode === 123) {
        event.preventDefault();
    }
    
    // Bloquear Ctrl+Shift+I (Inspeccionar elemento) / Cmd+Option+I en Mac
    if ((event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'i')) || 
        (event.metaKey && event.altKey && (event.key === 'I' || event.key === 'i'))) {
        event.preventDefault();
    }
    
    // Bloquear Ctrl+Shift+J (Consola) / Cmd+Option+J en Mac
    if ((event.ctrlKey && event.shiftKey && (event.key === 'J' || event.key === 'j')) || 
        (event.metaKey && event.altKey && (event.key === 'J' || event.key === 'j'))) {
        event.preventDefault();
    }
    
    // Bloquear Ctrl+U (Ver código fuente) / Cmd+Option+U en Mac
    if ((event.ctrlKey && (event.key === 'U' || event.key === 'u')) || 
        (event.metaKey && event.altKey && (event.key === 'U' || event.key === 'u'))) {
        event.preventDefault();
    }

    // Bloquear Ctrl+S (Guardar página) / Cmd+S en Mac
    if ((event.ctrlKey && (event.key === 'S' || event.key === 's')) || 
        (event.metaKey && (event.key === 'S' || event.key === 's'))) {
        event.preventDefault();
    }
});
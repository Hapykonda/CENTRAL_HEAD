// Seleccionamos todos los botones de información
const botonesInfo = document.querySelectorAll('.btn-info');

// Añadimos un evento de clic a cada botón
botonesInfo.forEach(boton => {
    boton.addEventListener('click', () => {
        // Obtenemos el contenedor de la descripción asociado al botón
        const descripcion = boton.nextElementSibling;

        // Alternamos la clase 'mostrar' para mostrar u ocultar la descripción
        descripcion.classList.toggle('mostrar');
    });
});

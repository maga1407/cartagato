// Selecciona el primer elemento <img> dentro de un contenedor con la clase "contenido"
const image = document.querySelector('.contenido img');

// Añade un escuchador de eventos al elemento <img> para cuando el cursor pase por encima (evento 'mouseover')
image.addEventListener('mouseover', () => {
    // Establece una transición para la propiedad 'transform' que durará 0.5 segundos con un efecto suave
    image.style.transition = 'transform 0.5s ease';
    // Rota la imagen 360 grados al pasar el cursor sobre ella
    image.style.transform = 'rotate(360deg)';
});

// Añade un escuchador de eventos al elemento <img> para cuando el cursor salga del área del elemento (evento 'mouseout')
image.addEventListener('mouseout', () => {
    // Establece una transición para la propiedad 'transform' que durará 0.5 segundos con un efecto suave
    image.style.transition = 'transform 0.5s ease';
    // Reestablece la rotación de la imagen a 0 grados cuando el cursor sale del área del elemento
    image.style.transform = 'rotate(0deg)';
});

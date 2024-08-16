// Selecciona la imagen por su clase
const image = document.querySelector('.img img');

// Añade un evento para cuando el mouse entre en la imagen
image.addEventListener('mouseover', () => {
    image.style.transition = 'transform 0.5s ease';
    image.style.transform = 'rotate(360deg)';
});

// Añade un evento para cuando el mouse salga de la imagen
image.addEventListener('mouseout', () => {
    image.style.transition = 'transform 0.5s ease';
    image.style.transform = 'rotate(0deg)';
});

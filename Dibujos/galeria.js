// Agrega un evento de clic a cada imagen
const images = document.querySelectorAll('.gallery img');
images.forEach(image => {
  image.addEventListener('click', () => {
    // Redirige al usuario a la página correspondiente
    if (image.alt === 'Dibujito UwU') {
      window.location.href = '../Dibujos/img/img feb rose.jpg';
    }
    // Agrega más casos aquí
  });
});
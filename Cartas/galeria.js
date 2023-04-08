// Agrega un evento de clic a cada imagen
const images = document.querySelectorAll('.gallery img');
images.forEach(image => {
  image.addEventListener('click', () => {
    // Redirige al usuario a la página correspondiente
    if (image.alt === 'De mi para ti') {
      window.location.href = '../Cartas/archivos/de mi para ti .pdf';
    } else if (image.alt === 'Mi querida Rose') {
      window.location.href = '../Cartas/archivos/Mi querida Rose.pdf';
    } else if (image.alt === 'Rose') {
      window.location.href = '../Cartas/archivos/Rose.pdf';
    } else if (image.alt === 'Cuatro meses') {
      window.location.href = '../Cartas/archivos/cuatro meses.pdf';
    }
    // Agrega más casos aquí
  });
});

// Agrega un evento de clic a cada imagen
const images = document.querySelectorAll('.gallery img');
images.forEach(image => {
  image.addEventListener('click', () => {
    // Redirige al usuario a la página correspondiente
    if (image.alt === 'Dibujito UwU') {
      window.location.href = '../Dibujos/img/img feb rose.jpg';
    } else if (image.alt === 'Dibujito2 UwU') {
      window.location.href = '../Dibujos/img/cumple del tavo.jpg';
    } else if (image.alt === 'Dibujito3 UwU') {
      window.location.href = '../Dibujos/img/cocoro.jpg';
    } else if (image.alt === 'Dibujito4 UwU') {
      window.location.href = '../Dibujos/img/corazon2.jpeg';
    }
    // Agrega más casos aquí
  });
});
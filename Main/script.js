const dias = document.getElementById("contador");

function actualizarContador() {
  const ahora = new Date();
  const inicio = new Date(2022, 11, 8); // fecha de inicio
  const diferencia = ahora - inicio; // se calcula la diferencia entre la fecha actual y la fecha de inicio
  const segundos = Math.floor(diferencia / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const diasTranscurridos = Math.floor(horas / 24);

  dias.textContent = diasTranscurridos;
}

actualizarContador();
setInterval(actualizarContador, 1000);
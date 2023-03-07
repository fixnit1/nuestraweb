window.addEventListener("load", function(){
    const heart = document.querySelector(".heart");
    let count = 0;
    let timer = setInterval(function(){
      count++;
      if(count <= 100){
        heart.style.width = count + "%";
        heart.style.height = count + "%";
      } else {
        clearInterval(timer);
        window.location.href = "./Main/main.html"; // Cambiar esto a la página a la que deseas redirigir
      }
    }, 10);
  });
  
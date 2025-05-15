const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton =>{
  boton.addEventListener("click", () => {
    const botonApretado = boton.textContent;

      if (boton.id === "c"){
        pantalla.textContent = "0";
        return;
      }

      if (boton.id === "borrar"){
        if(pantalla.textContent.length === 1 || pantalla.textContent === "Error!"){
          pantalla.textContent = "0";
        }
        else{
          pantalla.textContent = pantalla.textContent.slice(0, -1);
        }
        return;
      }
      
      if (boton.id === "igual"){
        try{
            let resultado = eval(pantalla.textContent);

            resultado = resultado.toString(9);

        if (resultado.length > 9) {
        resultado = resultado.slice(0, 9);
        }

    pantalla.textContent = resultado;
        }
        catch{
          pantalla.textContent = "Error!";
        }
        return;
      }

      if (pantalla.textContent ==="0" || pantalla.textContent === "Error!"){
          pantalla.textContent = botonApretado;
        }
        else {
        if (pantalla.textContent.length >= 9) return;
          pantalla.textContent += botonApretado;
    }
  })
})
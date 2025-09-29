    let botones = document.querySelectorAll(".btn")
    let Pantalla = document.querySelector(".pantalla")


    botones.forEach(boton =>{
        boton.addEventListener('click',function() {
            let botonPulsado = boton.textContent;

            if (boton.id === 'C') {
                Pantalla.textContent = '0';
                return;
            }

            if (boton.id === 'borrar') {
                if (Pantalla.textContent.length === 1 || Pantalla.textContent === 'Error') {
                    Pantalla.textContent = '0';
                }else{
                    Pantalla.textContent = Pantalla.textContent.slice(0,-1);
                }
                return;
            }   

            if (boton.id === 'igual') {
                try {
                    Pantalla.textContent = eval(Pantalla.textContent);
                } catch  {  
                    Pantalla.textContent = 'Error';
                }
                return;
            }

            if (boton.id === 'raiz') {
                try {
                    Pantalla.textContent = Math.sqrt(eval(Pantalla.textContent));
                } catch (error) {
                    Pantalla.textContent = 'Error';
                }
                return;
            }

            if (Pantalla.textContent === '0' || Pantalla.textContent === 'Error') {
                Pantalla.textContent = botonPulsado;
            }else{
                Pantalla.textContent += botonPulsado;
            }

            

        })
    })
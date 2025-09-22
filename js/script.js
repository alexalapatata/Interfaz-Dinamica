const elementos = document.querySelector("#elementos");

function crearimagen(event){
    console.log(event.target.value);
    elementos.innerHTML = "";
    for(let i = 0; i< event.target.value; i++){
        const contenedor = document.createElement("div");
        contenedor.classList.add("contenedor");
        
        const imagen = new Image();
        imagen.src = "https://raw.githubusercontent.com/AmancioCruz/Interfaz-Dinamica-2025/refs/heads/main/Formularios/recursos/pikachu.jpg";
        imagen.classList.add("imagen-nueva");
        
        const titulo = document.createElement("h2");
        titulo.textContent = imagen.src.substring(imagen.src.lastIndexOf('/')+1);
        
        const texto = document.createElement("p");
        texto.textContent = `Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        
        const boton = document.createElement("button");
        boton.textContent = `Leer mas`

        contenedor.appendChild(imagen);
        contenedor.appendChild(titulo);
        contenedor.appendChild(texto);
        contenedor.appendChild(boton);
        elementos.appendChild(contenedor);
    }
    /*
    const imagen = `<img src="recursos/pikachu.jpg"></img>`;
    elementos.innerHTML = imagen;*/

    /*const imagen = document.createElement("img");
    imagen.src = "../recursos/pikachu.jpg";
    imagen.classList.add("imagen-nueva");
    elementos.appendChild(imagen);
    console.log(imagen);*/
}


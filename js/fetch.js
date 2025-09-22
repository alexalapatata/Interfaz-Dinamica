const url_api = "https://pokeapi.co/api/v2/pokemon?limit=100";
let contenedorVisible = false;
let datosCargados = false;

// Función principal: obtiene la lista de Pokémon
function conexionFetch() {
    fetch(url_api)
        .then(respuesta => {
            if (respuesta.ok) {
                return respuesta.json();
            } else {
                throw new Error("Error en la petición: " + respuesta.status);
            }
        })
        .then(datos => {
            // Por cada Pokémon en la lista, hacer petición AJAX a su URL
            datos.results.forEach(pokemon => {
                peticionAJAX(pokemon.url);
            });
        })
        .catch(error => {
            console.error("Error al obtener la lista de Pokémon:", error);
        });
}

// Petición AJAX para obtener los datos completos de un Pokémon
function peticionAJAX(url) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            const datos = JSON.parse(xhr.responseText);
            crearPokemon(datos);
        } else {
            console.error("Error en la petición AJAX:", xhr.status);
        }
    };

    xhr.send();
}



// Crea y muestra la tarjeta de un Pokémon en el DOM
function crearPokemon(pokemon) {
    const contenedorPrincipal = document.getElementById('contenedor');

    // Contenedor de la tarjeta
    const contenedor = document.createElement('div');
    contenedor.className = 'contenedor-tarjeta';

    // Imagen del Pokémon (sprite frontal)
    const imagen = document.createElement('img');
    imagen.src = pokemon.sprites.front_default;
    imagen.alt = 'Imagen de ' + pokemon.name;
    imagen.className = 'imagen-pokemon';
    contenedor.appendChild(imagen);

    // Nombre del Pokémon
    const nombre = document.createElement('p');
    nombre.textContent = pokemon.name;
    contenedor.appendChild(nombre);

    // Insertar la tarjeta en el contenedor principal
    contenedorPrincipal.appendChild(contenedor);
}



function mostrarPoke() {
    const contenedor = document.getElementById('contenedor');

    if (!contenedorVisible) {
        // Mostrar
        contenedor.style.display = 'grid';
        contenedorVisible = true;

        // Si no hemos cargado datos aún, los solicitamos
        if (!datosCargados) {
            conexionFetch();
            datosCargados = true;
        }
    } else {
        // Ocultar
        contenedor.style.display = 'none';
        contenedorVisible = false;
    }
}
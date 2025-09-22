const formulario_producto_nuevo = document.querySelector("#formulario_producto_nuevo");
let productos = [];//estoy declarando un arreglo vacio
let src_imagen_producto = "../recursos/default.png";
let formularioVisible = false;

class Producto{
    constructor(id,imagen,nombre, decripcion, precio){
        this.Imagen = imagen; 
        this.Id = id;
        this.Nombre = nombre;
        this.Descripcion = decripcion;
        this.Precio = precio;
    }
    ObtenerDatos(){
        console.log(this.Id);
        console.log(this.Imagen);
        console.log(this.Nombre);
        console.log(this.Descripcion);
        console.log(this.Precio);
    }
}

function AgregarProducto(event){
    let datosFormulario = new FormData(formulario_producto_nuevo);
    //console.log(lectorFormulario);
    const datos = Object.fromEntries(datosFormulario.entries());
    console.log(datos)
    if(datos.Nombre !="" && datos.Descripcion !="" && datos.Precio != null && datos.imagen != ""){
        productos.push(new Producto(productos.length+1, src_imagen_producto, datos.Nombre, datos.Descripcion, datos.Precio));
    
        /*imptimir el arreglo por medio de un foreach*/
        /*productos.forEach(producto => {
            producto.ObtenerDatos();
            crearTarjeta(producto);
            mostrarFormularioAgregarProducto();
        });*/

        //cambios hechos para que se agregue solo el ultimo elemento del arreglo de productos 
        if(productos.length > 0){
            crearTarjeta(productos[productos.length-1]);
            mostrarFormularioAgregarProducto()
        }
    }
    /*const json = JSON.stringify(datos);
    console.log(datos);**/
}

function obtenerImagen(event){
    const file = event.target.files[0];
    if(file.type === "image/jpeg" || file.type === "image/png"){
        console.log(file.name);
        const lector = new FileReader();
        lector.onload = (event) =>{
            src_imagen_producto = event.target.result;
            document.querySelector("#imagen-file").src = src_imagen_producto;
        }
        lector.readAsDataURL(file);
    }
}

function crearTarjeta(usuario){
            const contenedor = document.createElement("div");
        contenedor.classList.add("contenedor");
        
        const imagen = new Image();
        imagen.src = usuario.Imagen;
        imagen.classList.add("imagen-nueva");
        
        const titulo = document.createElement("h2");
        titulo.textContent = usuario.Nombre;
        
        const texto = document.createElement("p");
        texto.textContent = usuario.Descripcion;

        const precio = document.createElement("p");
        precio.textContent = usuario.Precio;
        
        const boton = document.createElement("button");
        boton.textContent = `Leer mas`

        contenedor.appendChild(imagen);
        contenedor.appendChild(titulo);
        contenedor.appendChild(texto);
        contenedor.appendChild(precio);
        contenedor.appendChild(boton);
        elementos.appendChild(contenedor);
}

function mostrarFormularioAgregarProducto(){
    const formulario = document.querySelector("#contenedor_formulario_producto_nuevo");
    if(!formularioVisible){
        formulario.style.display = "grid";
        formularioVisible = true;
    }
    else{
        formulario.style.display = "none";
        formularioVisible = false;
    }
}


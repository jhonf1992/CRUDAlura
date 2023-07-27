import { clientServices } from "../service/cliente-service.js"; //importamos el archivo con la funcion a usar

const formulario = document.querySelector("[data-form]") // creamos la constante formulario y contenemos la informacion de data-form

formulario.addEventListener("submit", (evento) => {  //agregamos el escuchador para el evento submit y la funcion que se activara
    evento.preventDefault(); // prevenimos el comportamiento por defecto del formulario osea la recarga de la pagina
    const nombre = document.querySelector("[data-nombre]").value;  // capturamos el valor del input nombre y el email
    const email = document.querySelector("[data-email]").value;

    clientServices.crearCliente(nombre, email).then(() =>{  // llamamos la funcion del archivo client-service.js
        window.location.href = "/screens/registro_completado.html"  // le decimos a la aplicacion que si el registro es exitoso nos lleve a esta otra pagina
    }).catch(error => console.log(err)) // si hay error nos lo muestra
});

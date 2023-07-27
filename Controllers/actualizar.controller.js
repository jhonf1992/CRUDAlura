import { clientServices } from "../service/cliente-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = () =>{
    const url = new URL(window.location);  // creamos una constante para que nos almacene la url actual
    const id = url.searchParams.get('id'); // Creamos variable donde almacenaremos el metodo searchParams.get para que nos traiga el id

    if(id == null) {
        window.location.href = '../screens/error.html'  // en caso de no venir con el id nos redireccionara a la pagina de error
    }
    const nombre = document.querySelector('[data-nombre]'); //seleccionamos el campo del data nombre en una const
    const email = document.querySelector('[data-email]'); // seleccionamos el campo del data email en una const
    
    clientServices.detalleCliente(id).then((perfil) =>{
        
        nombre.value = perfil.nombre; // al campo capturado en la constante le vamos a asignar el valor que traiga perfil desde la url, lo mismo para email 
        email.value = perfil.email;
    });
};
obtenerInformacion();

formulario.addEventListener('submit', (evento) => { //agregamos el listener
    evento.preventDefault();
    const url = new URL(window.location);  // creamos una constante para que nos almacene la url actual
    const id = url.searchParams.get('id'); // Creamos variable donde almacenaremos el metodo searchParams.get para que nos traiga el id
    const nombre = document.querySelector('[data-nombre]').value; //seleccionamos el valor del data nombre en una const
    const email = document.querySelector('[data-email]').value; // seleccionamos el valor del data email en una const
    console.log(nombre, email);
    clientServices.actualizarCliente(nombre,email, id).then(() =>{
        window.location.href = '../screens/edicion_concluida.html';
    })
})
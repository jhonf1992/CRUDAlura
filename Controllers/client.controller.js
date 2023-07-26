// Importamos el llamado de la funcion para comunicarnos con el servidor 

import { clientServices } from "../service/cliente-service.js";

console.log(clientServices);


//1 IMPORTANDO EL CODIGO DE HTML 
const crearNuevaLinea = (nombre, email) => {     //Creamos una constante que nos hara una funcion 
    const linea = document.createElement('tr')    // me va a crear una etiqueta <tr>
    const contenido =                           // Creamos una variable con el contenido que va a ir dentro de la etiqueta <tr>
        `   <td class="td" data-td>${nombre}</td>
            <td>${email}</td>
            <td>
                <ul class="table__button-control">
                    <li>
                    <a
                        href="../screens/editar_cliente.html"
                        class="simple-button simple-button--edit"
                        >Editar</a
                    >
                    </li>
                    <li>
                    <button
                        class="simple-button simple-button--delete"
                        type="button"
                    >
                        Eliminar
                    </button>
                    </li>
                </ul>
            </td>`
            linea.innerHTML = contenido;  // le decimos a la variable linea que me introduzca el codigo de la var cotenido en la vr linea
            return linea; // retorno la linea 
};

//2 - Seleccionando la etiqueta sobre la cual vamos a trabajar
const table = document.querySelector("[data-table]");   // seleccionaremos este data atribute que esta en HTML y que es donde pondremos la funcion crearNuevaLinea que sera llamada por el metodo onload 


clientServices.listaClientes()
    .then((data) =>{      // de la promesa obtenemos una data, a esta data la pasamos por un foreach
        data.forEach((perfil) => {
            const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);  // encerramos el foreach en una variable y almacenamos el nombre que extrae del arreglo y el email que se introdujeron en la linea 
            table.appendChild(nuevaLinea); // finalmente creamos la linea que se ingresa como hijo en la variable table
        });
    })
    .catch((error) => alert('Ocurrió un error')); //ponemos un error 


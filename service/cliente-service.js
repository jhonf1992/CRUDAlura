// //1 IMPORTANDO EL CODIGO DE HTML 
// const crearNuevaLinea = (nombre, email) => {     //Creamos una constante que nos hara una funcion 
//     const linea = document.createElement('tr')    // me va a crear una etiqueta <tr>
//     const contenido =                           // Creamos una variable con el contenido que va a ir dentro de la etiqueta <tr>
//         `   <td class="td" data-td>${nombre}</td>
//             <td>${email}</td>
//             <td>
//                 <ul class="table__button-control">
//                     <li>
//                     <a
//                         href="../screens/editar_cliente.html"
//                         class="simple-button simple-button--edit"
//                         >Editar</a
//                     >
//                     </li>
//                     <li>
//                     <button
//                         class="simple-button simple-button--delete"
//                         type="button"
//                     >
//                         Eliminar
//                     </button>
//                     </li>
//                 </ul>
//             </td>`
//             linea.innerHTML = contenido;  // le decimos a la variable linea que me introduzca el codigo de la var cotenido en la vr linea
//             return linea; // retorno la linea 
// };

// //2 - Seleccionando la etiqueta sobre la cual vamos a trabajar
// const table = document.querySelector("[data-table]");   // seleccionaremos este data atribute que esta en HTML y que es donde pondremos la funcion crearNuevaLinea que sera llamada por el metodo onload 



// CRUD:  => Metodos HTTP
// Create => POST
// Read   => GET
// Update => PUT/PATCH
// Delete => Delete

// 3 - Abrir HTTP (metodo, url) - Vamos a implementar las promesas 

// const listaClientes = () => {
//     const promise = new Promise((resolve, reject) =>{ // Creando la promesa
//         const http = new XMLHttpRequest();    // llamamos la clase XMLHttpRequest

//         http.open("GET", "http://localhost:3000/perfil"); // localizando la url
//         http.send(); // enviando la peticional servidor
        
//         http.onload = () => {          // el metodo onload permite capturar la respuesta y ejecutar esta funcion en cuanto se obtenga respuesta del servidor
//             const response = JSON.parse(http.response); // obtenemos la respúesta y la guardamos en la constante - Luego la convertimos en Json para que lo manipule javascript
//             if (http.status >= 400) {
//                 reject(response)   //  Estamos indicando que si nos devuelve un status superior al 400 que son errores de cliente o servidor nos de la respuesta que hay en response o el JSON
//             } else {
//                 resolve(response) // De igual forma nos enviara el JSON pero con la funcion resolve en la que nos indica que ha sido exitoso 
//             }
//         };
//     });
//     return promise;  // retornara la promesa 
// }

// listaClientes().then((data) => {   // llamamos la funcion para que nos envie la informacion del servidor
//     data.forEach((perfil) => {      // Recorremos el arreglo 
//     const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
//     table.appendChild(nuevaLinea);
//     });
// }).catch((error) => alert("Ocurrió un error"));  //generamos un catch por si hay algun error

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4 - Ahora vamos a implementear FETCH que es mas eficiente que las promesas para no usar tanto codigo 

// const listaClientes = () => {  // llamamos el metodo fetch y en el pasamos la url a consultar y obtener la promesa
//     return fetch('http://localhost:3000/perfil').then(respuesta => {  
//         return respuesta.json();  // al obtener la promesa la retornamos y la convertimos en formato Json
//     });
// };

// listaClientes()
//     .then((data) =>{      // de la promesa obtenemos una data, a esta data la pasamos por un foreach
//         data.forEach((perfil) => {
//             const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);  // encerramos el foreach en una variable y almacenamos el nombre que extrae del arreglo y el email que se introdujeron en la linea 
//             table.appendChild(nuevaLinea); // finalmente creamos la linea que se ingresa como hijo en la variable table
//         });
//     })
//     .catch((error) => alert('Ocurrió un error')); //ponemos un error 


// 5 - Ahora vamos a acortar mas el codigo 

// - Como es una operacion sencilla entonces podemos hacer eliminacion de llaves asi:


const listaClientes = () =>   // llamamos el metodo fetch y en el pasamos la url a consultar y obtener la promesa
fetch('http://localhost:3000/perfil').then(respuesta => respuesta.json()  // al obtener la promesa la retornamos y la convertimos en formato Json
);

export const clientServices = {
    listaClientes,
}


// listaClientes()
//     .then((data) =>{      // de la promesa obtenemos una data, a esta data la pasamos por un foreach
//         data.forEach((perfil) => {
//             const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);  // encerramos el foreach en una variable y almacenamos el nombre que extrae del arreglo y el email que se introdujeron en la linea 
//             table.appendChild(nuevaLinea); // finalmente creamos la linea que se ingresa como hijo en la variable table
//         });
//     })
//     .catch((error) => alert('Ocurrió un error')); //ponemos un error 


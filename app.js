// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Espacio de variables globales
// Variables globales
let listaAmigos = [];
let amigoActual = "";

// Función para asignar texto a un elemento HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// Función para agregar un amigo a la lista
function agregarAmigo() {
    //usar const porque la referencia no va a cambiar
    const inputAmigo = document.querySelector('#amigo');
    const nombre = inputAmigo.value.trim();

    // Verificar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, escribe un nombre antes de añadirlo.");
        return;
    }

    // Agregar el nombre a la lista
    listaAmigos.push(nombre);
    asignarTextoElemento('h1', 'Los amigos están llegando');
    // Actualizar la lista visual y limpiar el cuadro de texto
    actualizarListaVisual();
    limpiarCaja('#amigo');
}

// Función para actualizar la lista de amigos en el HTML
function actualizarListaVisual() {
    const listaHtml = document.querySelector('#listaAmigos');
    listaHtml.innerHTML = ""; // Limpiar contenido previo
        //Creando lista de nombres en el html
    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = `${amigo}`;
        listaHtml.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    // Validar si la lista está vacía
    //nos aseguramos buscando una igualdad estricta
    if (listaAmigos.length === 0) {
        asignarTextoElemento('h1', 'Amigo Secreto');
        asignarTextoElemento('#resultado', "Lista de nombres vacía.");
        alert("Añada a sus amigos antes del sorteo");
        return;
    }

    // Generar un índice aleatorio, obtener el amigo y luego eliminar de la lista
    const indiceAleatorio = generarIndiceAleatorio();
    amigoActual = listaAmigos[indiceAleatorio];

    // Mostrar el resultado y eliminar el amigo de la lista
    asignarTextoElemento('#resultado', `Amigo secreto: ${amigoActual}`);
    // Eliminar el nombre sorteado de la lista, así no sale sorteado más de una vez
    listaAmigos.splice(indiceAleatorio, 1);
    //actualizarEstadoBoton();
    asignarTextoElemento('h1', 'Realizando el sorteo de Amigos Secretos');
    actualizarListaVisual();
}

// Función para generar un índice aleatorio dentro del rango de la lista
function generarIndiceAleatorio() {
    return Math.floor(Math.random() * listaAmigos.length);
}

/*
function actualizarEstadoBoton() {
    const botonSortear = document.getElementById('boton-sortear');
    
    // Deshabilitar si la lista tiene menos de 2 amigos
    if (listaAmigos.length < 2) {
        botonSortear.setAttribute('disabled', 'true');
    } else {
        botonSortear.removeAttribute('disabled');
    }
}
*/

// Función para limpiar un campo de texto
function limpiarCaja(selector) {
    document.querySelector(selector).value = "";
}

// Función para Inicializar proyecto
function condicionesIniciales() {
   asignarTextoElemento('h1', 'Amigo Secreto');
   asignarTextoElemento('#resultado', 'Introduce nombres para sortear.');
}

// Inicializar la aplicación
condicionesIniciales();

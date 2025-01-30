// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let friendsList = [];

function changes(id,content,color) {
    let element = document.getElementById(id);

    if (!element) {
        console.error(`Elemento con ID '${id} no encontrado`);
    } else if (id.toLowerCase().includes = "input") {
        element.placeholder = content;
        element.style.color = color;
    }
}

// Creando función que permitirá agregar los nombres correctamente 
function agregarAmigo() {
    let nombre = document.getElementById("amigo"); // Capturando el valor del input

    let nombreMin = nombre.value.trim().toLowerCase();

    if (/\d/.test(nombre.value) || nombre.value.trim() === "" || /[^A-Za-z\s]/.test(nombre.value)) {

        changes("amigo","Introduzca un valor válido", "rgba(139, 0, 0)");
    } else if (friendsList.some(friend => friend.toLowerCase() === nombreMin)) {
        
        changes("amigo","El nombre ya se encuentra en la lista","rgba(34, 113, 179)");
    } else {

        changes("amigo","¡Muy bien!", "green");

        const ul = document.getElementById("listaAmigos");
        const li = document.createElement("li");
        let lista = document.createTextNode(nombre.value);

        li.appendChild(lista);
        ul.appendChild(li);

        friendsList.push(nombre.value);
        
        nombre.value = "";
    }
}

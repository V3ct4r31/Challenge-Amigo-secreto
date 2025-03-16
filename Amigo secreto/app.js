let amigo = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    if (!nombreAmigo) {
        alert("Debes ingresar un nombre");
        return;
    }
    amigo.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();

    renderizarAmigos(); // Llamar a renderizarAmigos para actualizar la lista
}

function renderizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de volver a renderizarla

    for (let i = 0; i < amigo.length; i++) {  // Corrección en la condición del for
        let item = document.createElement("li");
        item.textContent = amigo[i]; // Uso de corchetes [] para acceder al arreglo
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigo.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");

    // Corrección: uso de backticks para la interpolación de cadenas
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

    // Limpiar la lista de amigos después del sorteo
    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";

}
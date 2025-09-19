// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const unoAmigo = document.getElementById("amigo");
const listaAmigos = [];
const inputAmigos = document.getElementById("listaAmigos");
const inputResultado = document.getElementById("resultado");

function agregarAmigo(){
    
    listaAmigos.push(unoAmigo.value);
    inputAmigos.innerHTML += `<li>${unoAmigo.value}</li>`;

    if (unoAmigo.value === "") {
        alert("Por favor, ingresa el nombre de un amigo");
        return
    }
    
}

function sortearAmigo( ) {
    const random = Math.floor(Math.random( ) * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    inputResultado.innerHTML = `<li>Tú amigo secreto es: ${amigoSecreto}</li>`;
}

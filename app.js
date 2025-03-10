// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresIngresados =[];
console.log(nombresIngresados.length);
let mensajeDeAlerta = "Por favor, ingrese mas nombres";

function agregarAmigo(){
        let entrada = document.getElementById("amigo").value;
        let valorEntrada = entrada.trim();
        if(valorEntrada ===""){
            alert(mensajeDeAlerta);
        }else{
            nombresIngresados.push(valorEntrada);
            document.getElementById("amigo").value="";
            actualizarListaAmigos();
        }
    console.log(nombresIngresados);

}

function actualizarListaAmigos(){
    document.getElementById("resultado").innerHTML ="";
    let lista = document.getElementById("listaAmigos")
    lista.innerHTML="";
    for (let i = 0; i < nombresIngresados.length; i++) {
        let elementoLista = document.createElement("li");
        elementoLista.textContent = nombresIngresados[i];
        lista.appendChild(elementoLista);
    }
}

function sortearAmigo() {
    if( nombresIngresados.length === 0){
        alert(mensajeDeAlerta);
    }else{
        let indiceAleatorio = Math.floor(Math.random() * nombresIngresados.length);
        let nombreSorteado = nombresIngresados[indiceAleatorio];
        document.getElementById("resultado").innerHTML = `${nombreSorteado} es tu amigo secreto `;
        reiniciar();
    }
    
}
function reiniciar(){
    nombresIngresados=[];
    document.getElementById("listaAmigos").innerHTML="";
    document.getElementById("amigo").value="";
}
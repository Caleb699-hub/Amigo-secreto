// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresIngresados =[];
console.log(nombresIngresados.length);


function agregarAmigo(){
        let entrada = document.getElementById("amigo").value;
        let valorEntrada = entrada.trim();
        if(valorEntrada ===""){
            alert("Por favor, inserte un nombre");
        }else{
            nombresIngresados.push(valorEntrada);
            document.getElementById("amigo").value="";
        }
    console.log(nombresIngresados);

}
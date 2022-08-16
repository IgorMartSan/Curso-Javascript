

var vetorPacientes = document.querySelectorAll(".paciente"); // pega a tabela que tem a class pacientes
console.log (vetorPacientes);

for (let index = 0; index < vetorPacientes.length; index++) { // para cada paciente ele vai pegar 
    var peso = vetorPacientes[index].querySelector(".info-peso").textContent;
    var altura = vetorPacientes[index].querySelector(".info-altura").textContent;
    var tdIMC = vetorPacientes[index].querySelector(".info-imc")  
    

    var pesoValido = true;
    var alturaValido=true;

    if (peso < 0 || peso > 300.00)  {
        alert ("Peso invalido na linha: "+ (index + 1));
        pesoValido = false;
        tdIMC.textContent = "Peso inválida";
        vetorPacientes[index].style.color = "red";
    }

    if ( altura < 0.00 || altura > 3.00){
        alert("Altura inválida na linha: "+ (index + 1));
        alturaValido=false;
        tdIMC.textContent = "Altura inválido";
        vetorPacientes[index].style.color = "red";
        vetorPacientes[index].classList.add("paciente-invalido");

    }

    if (alturaValido != false &&  pesoValido != false){
    var resultado = (peso / (altura**2));
    tdIMC.textContent = resultado.toFixed(2) ;  
    }
    //alert(" peso "+ peso + " - altura "+ altura ); 

}

//escutando evento 

var titulo = document.querySelector(".titulo");
titulo.addEventListener("click", mostraMensagemAoClicar);

function mostraMensagemAoClicar (){

    alert("Voce clicou no Titulo")
}

var botaoFormulario = document.querySelector("#adicionar-paciente");
botaoFormulario.addEventListener("click", (event) =>{
    event.preventDefault();
    console.log("clicou no botão")
})
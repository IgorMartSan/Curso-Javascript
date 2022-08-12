

var vetorPacientes = document.querySelectorAll(".paciente");

for (let index = 0; index < vetorPacientes.length; index++) {
    var peso = vetorPacientes[index].querySelector(".info-peso").textContent;
    var altura = vetorPacientes[index].querySelector(".info-altura").textContent;

    vetorPaciente[index].querySelector(".info-imc").textContent = peso * (altura**2);

    alert(" peso "+ peso + " - altura "+ altura); 

}
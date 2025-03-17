function verificarIdade() {
    const idadeInput = parseInt(document.getElementById("idadeInput").value);
    let mensagem=document.getElementById("mensagem")

    if (idadeInput >= 18) {
        mensagem.innerHTML = "Você é maior de idade, pode dirigir!";

    } else {
        mensagem.innerHTML= "Você é menor de idade, não pode dirigir.";
    }

}
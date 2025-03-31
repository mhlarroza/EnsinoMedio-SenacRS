let notas = [];
        
function adicionarNota() {
    let inputNota = document.getElementById("nota");
    let valor = parseFloat(inputNota.value);
    
    if (!isNaN(valor) && valor >= 0) {
        notas.push(valor);
        inputNota.value = "";
    } else if (valor === -1) {
        calcularMedia();
    } else {
        alert("Por favor, insira um número válido.");
    }
}

function calcularMedia() {
    if (notas.length === 0) {
        document.getElementById("resultado").innerText = "Nenhuma nota inserida.";
        return;
    }
    
    let soma = notas.reduce((acc, nota) => acc + nota, 0);
    let media = soma / notas.length;
    document.getElementById("resultado").innerText = "Média das notas: " + media.toFixed(2);
}
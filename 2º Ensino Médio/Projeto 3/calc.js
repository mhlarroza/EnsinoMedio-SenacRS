function addvalor(valor) {
    document.getElementById("tela").value += valor;
}

function calcular() {
    try {
        document.getElementById("tela").value = eval(document.getElementById("tela").value);
    } catch (e) {
        alert("Expressão inválida!");
    }
}

function limpar() {
    document.getElementById("tela").value = "";
}
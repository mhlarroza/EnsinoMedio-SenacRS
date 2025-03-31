function converterMoeda() {
    const valorReal = parseFloat(document.getElementById("valor").value);
    const moeda = document.getElementById("moeda").value;
    let taxa;

    switch (moeda) {
        case "dólar":
            taxa = 0.17;
            break;
        case "euro":
            taxa = 0.16;
            break;
        case "libra":
            taxa = 0.13;
            break;
        default:
            alert("Escolha uma moeda válida.");
            return;
    }

    const resultado = valorReal * taxa;
    document.getElementById("resultado").innerText = `Valor convertido: ${resultado.toFixed(2)} ${moeda}`;
}
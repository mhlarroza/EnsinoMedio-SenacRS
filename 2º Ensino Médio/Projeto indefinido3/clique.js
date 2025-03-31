let contador = 0;
    let botao = document.getElementById("botao");
    let paragrafo = document.getElementById("contador");

    botao.addEventListener("click", () {
        contador++;
        paragrafo.innerText = contador;
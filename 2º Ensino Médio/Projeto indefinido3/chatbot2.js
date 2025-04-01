function sendMessage(){
    let userText = document.getElementById("userInput").value;
    let chatbox = document.getElementById("chatbox");
 
    if (userText.trim() == "") return;
 
    chatbox.innerHTML += `<p><strong>Você:</strong> ${userText}</p>`;
    document.getElementById("userInput").value = "";
 
    setTimeout(() => {
        let botResponse = getBotResponse(userText);
        chatbox.innerHTML += `<p><strong>Bot:</strong> ${botResponse}</p>`;
        chatbox.scrollTop = chatbox.scrollHeight;
    }, 500);
}
 
function getBotResponse(input) {
    input = input.toLowerCase();
 
    const respostas = {
"o que é um número primo?": "Um número primo é um número natural maior que 1 que só pode ser dividido por 1 e por ele mesmo.",
"quanto é 5 + 3": "5 + 3 é igual a 8.",
"quanto é 10 x 2?": "10 vezes 2 é igual a 20.",
"quem descobriu o teorema de pitágoras?":"O Teorema de Pitágoras foi desenvolvido pelo matemático grego Pitágoras."
    };
    return respostas[input] || "Desculpe, ainda não sei responder essa pergunta.";
}
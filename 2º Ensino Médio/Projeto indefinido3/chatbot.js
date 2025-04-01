function sendMessage() {
    let userText = document.getElementById("userInput").value;
    let chatbox = document.getElementById("chatbox");

    if (userText.trim() == "") return;

    chatbox.innerHTML += `<p><strong>Você:</strong> ${userText}</p>`;
    document.getElementById("userInput").value = "";

    setTimeout(() => {
        let botResponse = getBotResponse(userText);
        chatbox.innerHTML += `<p><strong>Chatbot:</strong> ${botResponse}</p>`;
        chatbox.scrollTop = chatbox.scrollHeight;
    }, 500);
}

function getBotResponse(input) {
    input = input.toLowerCase()

    const respostas = {
        "Oi": "Olá, com que posso ajudar?",
        "Qual a raiz quadrada de 2025?": "A raiz quadrada de 2025 é 45. Se precisar de ajuda é só chamar! 😊💕"
        // Outras respostas adicionais
    };

    return respostas[input] || "Desculpe, não sei responder essa pergunta.";
}
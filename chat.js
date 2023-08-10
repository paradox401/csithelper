const messages = document.getElementById("messages");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");

sendButton.addEventListener("click", () => {
    const message = messageInput.value;
    if (message.trim() !== "") {
        const messageElement = document.createElement("div");
        messageElement.textContent = message;
        messages.appendChild(messageElement);
        messageInput.value = "";
    }
});

var chatContainer = document.querySelector('.chat-container');
var chatBox = document.getElementById('chat-box');
var botName = 'Kapa';

function toggleChatbot() {
    chatContainer.style.display = chatContainer.style.display === 'none' ? 'block' : 'none';
}


function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') {
        return;
    }
    addMessage(userInput, 'user');
    var botResponse = getBotResponse(userInput);
    addMessage(botResponse, 'bot');
    document.getElementById('user-input').value = '';
    // Remove the toggleChatbot() call here
}

function addMessage(message, sender) {
    var messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userInput) {
    userInput = userInput.toLowerCase().trim();
    var response = '';

    // Check for specific phrases or sentences
    if (userInput.includes('work times') || userInput.includes('work hours') || userInput.includes('hours of operation')) {
        response = "Our hours of operation are Monday to Fridays, 10am to 6pm and Saturdays 10am to 2pm Central Time.";
    } else if (userInput.includes('pricing') || userInput.includes('cost')) {
        response = "For pricing information, please send an email to callassist18@gmail.com.";
    } else if (userInput.includes('location') || userInput.includes('address')) {
        response = "Our office is located at Enitel 1 C.N. 1/2 C.E. M/I, Ticuantepe, Nicaragua.";
    } else if (userInput.includes('contact info') || userInput.includes('contact information') || userInput.includes('phone number')) {
        response = "You can contact us at callassist18@gmail.com or call us at 619-693-6911.";
    } else if (userInput.includes('services') || userInput.includes('products') || userInput.includes('services')) {
        response = "Our services offered are Virtual Assistance, Customer Support, Cold/Warm Calling, App Development, Website Development and Chatbot Development";
    } else {
        response = "I'm sorry, I didn't understand that. Please ask about work times, pricing, location, or contact info.";
    }

    return response;
}


// Initial message
addMessage(`Hello, I am ${botName}! How can I assist you today?`, 'bot');

document.getElementById('chat-button').addEventListener('click', function () {
    toggleChatbot();
});


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
    // Hours of operation response message
    if (userInput.includes('work times') || userInput.includes('work hours') ||
        userInput.includes('hours') ||
        userInput.includes('times') ||
        userInput.includes('hours of operation')) {
        response = "Our hours of operation are Monday to Fridays, 10am to 6pm and Saturdays 10am to 2pm Central Time.";
        // Pricing response message
    } else if (userInput.includes('pricing') ||
        userInput.includes('prices') ||
        userInput.includes('charge') ||
        userInput.includes('cost')) {
        response = "For pricing information, please send an email to callassist18@gmail.com or call us at 619-693-6911";
        // Specializations response message
    } else if (userInput.includes('specializations') ||
        userInput.includes('specializations') ||
        userInput.includes('specialize') ||
        userInput.includes('cost')) {
        response = "At Virtual Tech Solutions NI, we specialize in Full Stack Software Development, IT Support, Machine Learning & AI, Digital Marketing & E-commerce, and WordPress Design/Development.";
        // Location response message
    } else if (userInput.includes('location') ||
        userInput.includes('located') ||
        userInput.includes('address')) {
        response = "Our office is located at Enitel 1 C.N. 1/2 C.E. M/I, Ticuantepe, Nicaragua.";
        // Contact info response message
    } else if (userInput.includes('contact info') || userInput.includes('contact information') ||
        userInput.includes('contact') ||
        userInput.includes('phone number')) {
        response = "You can contact us at callassist18@gmail.com or call us at 619-693-6911.";
        // Services response message
    } else if (userInput.includes('services') || userInput.includes('products') || userInput.includes('services')) {
        response = "Our services offered are Full Stack Software Development, AI-Assisted Solutions, IT Support, Google Digital Marketing & E-commerce, WordPress Design/Development and Custom Software Development!";
        // Company info response message
    } else if (userInput.includes('company') || userInput.includes('company') ||
        userInput.includes('business')) {
        response = "Virtual Tech Solutions NI provides a comprehensive suite of services to meet your digital needs. Our services offered include Full Stack Software Development, AI-Assisted Solutions, IT Support, Google Digital Marketing & E-commerce, WordPress Design/Development and Custom Software Development!";
        // Goodbye response message
    } else if (userInput.includes('bye') || userInput.includes('goodbye') || userInput.includes('chow') ||
        userInput.includes('thank you')) {
        response = "Goodbye! Thank you for visiting us. Please feel free to visit us anytime.";
        // Salutation response message
    } else if (userInput.includes('hi') ||
        userInput.includes('hi') ||
        userInput.includes('good evening') ||
        userInput.includes('good afternoon') ||
        userInput.includes('good morning')) {
        response = "Hi! My name is Kapa. How can I assist you?";
        // Vulgar gesture responces
    } else if (userInput.includes('fuck you') ||
        userInput.includes('fuck off') ||
        userInput.includes('kiss my ass') ||
        userInput.includes('fuck yourself')) {
        response = "I understand that you are upset, and I apologize for any inconvenience you may have experienced. At Virtual Tech Solutions NI, we value our customers and strive to provide the best service possible.To better assist you and resolve the issue promptly, please call us at 619-693-6911 or email us at callassist18@gmail.com? We're committed to addressing your concerns and ensuring your satisfaction.Thank you for your patience and understanding.";
    }
    // Initial message answer in no understanding
    else {
        response = "I'm sorry, I didn't understand that. Please ask about our company, hours of operation, pricing, location, contact info or services offered.";
    }

    return response;
}


// Initial message
addMessage(`Hello, I am ${botName}! How can I assist you today?`, 'bot');

document.getElementById('chat-button').addEventListener('click', function () {
    toggleChatbot();
});

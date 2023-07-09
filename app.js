const input = document.getElementById('in');
const sendButton = document.querySelector('.send_button');

function sendMessage() {
  const val = input.value;

  // Creates a message
  const message = document.createElement('div');
  message.classList.add('message');
  message.textContent = val;

  // Adds message to chat
  const body = document.querySelector('.body');
  body.append(message);

  // Creates a response from the bot
  const response = document.createElement('div');
  response.classList.add('response');
  response.textContent = 'We will get back you with an answer as soon as possible.';
  body.append(response)

  // Clears input
  input.value = '';
}

sendButton.addEventListener('click', sendMessage);

// Allows the enter key to also be used
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});
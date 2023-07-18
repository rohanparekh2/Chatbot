const input = document.getElementById('in');
const sendButton = document.querySelector('.send_button');
const initial_message = document.getElementById('initial_message')

  // Initial message
  const init = document.createElement('div');
  init.classList.add('init');
  init.textContent = 'How can we help you today?';
  initial_message.append(init);

function scroll() {
  const b = document.querySelector('.body');
  b.scrollTop = b.scrollHeight;
}
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

  scroll();
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


//faq.addEventListener('click', faqClick);
//social_media.addEventListener('click', social_mediaClick);

function buttonClick(id, link, linktext, message, response) {
  const button = document.getElementById(id);
  button.addEventListener('click', () => {

    // Creates a message
    const m = document.createElement('div');
    m.classList.add('message');
    m.textContent = message;

    // Adds message to chat
    const body = document.querySelector('.body');
    body.append(m);

    // Creates a response from the bot
    const r = document.createElement('div');
    r.classList.add('response');
    const l = document.createElement('a');
    l.href = link;
    l.textContent = linktext;
    l.target = '_blank';
    r.textContent = response;
    r.append(l)
    body.append(r)

    scroll();
  });
}

buttonClick('faq', "https://www.wailofatale.org/faq/", "FAQs", "I have a frequently asked question", 'Here is a link to our frequently asked questions:  ');
buttonClick('social_media', "https://www.wailofatale.org/#social", "Social Media", "I would like to visit your social media", 'Here is a link to our social media:  ');

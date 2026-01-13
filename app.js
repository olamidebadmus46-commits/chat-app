// Simple chat app logic (without Firebase yet)

function sendMessage() {
  const username = document.getElementById('username').value;
  const message = document.getElementById('message').value;

  if (!username || !message) {
    alert("Please enter your name and a message!");
    return;
  }

  const chatList = document.getElementById('chat');
  const li = document.createElement('li');
  li.textContent = username + ": " + message;
  chatList.appendChild(li);

  // Clear message input
  document.getElementById('message').value = "";
  }

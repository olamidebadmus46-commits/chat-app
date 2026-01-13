// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDzMyG1-sLoQEBW4RvEtRSCpOQLK7R5wSM",
  authDomain: "chatapp-6490d.firebaseapp.com",
  databaseURL: "https://chatapp-6490d-default-rtdb.firebaseio.com",
  projectId: "chatapp-6490d",
  storageBucket: "chatapp-6490d.firebasestorage.app",
  messagingSenderId: "893124317814",
  appId: "1:893124317814:android:f4dd6b71feb831d83ec557"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Send message
function sendMessage() {
  const username = document.getElementById('username').value;
  const message = document.getElementById('message').value;

  if (!username || !message) {
    alert("Enter your name and message!");
    return;
  }

  db.ref("messages").push({ username, message });
  document.getElementById('message').value = "";
}

// Display messages in real-time
db.ref("messages").on("child_added", function(snapshot) {
  const data = snapshot.val();
  const chatList = document.getElementById('chat');
  const li = document.createElement('li');
  li.textContent = data.username + ": " + data.message;
  chatList.appendChild(li);
});

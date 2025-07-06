//Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
   //voice search
   function startVoiceSearch() {
    if(!('webkitSpeechRecognition')) {
        alert("Your browser doesn't support voice recognition.");
        return;
    }
    const searchInput = document.getElementById('searchInput');
    const micBtn = document.getElementById('micBtn');
    const status = document.getElementById('status');

    // Check for SpeechRecognition support
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      micBtn.disabled = true;
      status.textContent = 'Voice search not supported in this browser.';
    } else {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      micBtn.addEventListener('click', () => {
        recognition.start();
        status.textContent = 'Listening...';
      });

      recognition.addEventListener('result', (event) => {
        const transcript = event.results[0][0].transcript;
        searchInput.value = transcript;
        status.textContent = `You said: "${transcript}"`;
      });

      recognition.addEventListener('speechend', () => {
        recognition.stop();
        status.textContent = 'Stopped listening.';
      });

      recognition.addEventListener('error', (e) => {
        status.textContent = 'Error: ' + e.error;
      });
    }
   }
     //You could send this Data to a backend(Node.js, PHP, etc.)
     function showCreateSection() {
        const section =
        document.getElementById("create");
        if (section.style.display ===
"none" ) {
    section.style.display = "block";
    section.scrollIntroView({behaviour:
"smooth" })
}
      }   
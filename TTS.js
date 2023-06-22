<!DOCTYPE html>
<html>
  <head>
    <title>Text-to-Speech Example</title>
    <script>
      function speakText() {
        var text = document.getElementById("text").value;
        var speech = new SpeechSynthesisUtterance();
        speech.text = text;
        
        // Wait for voices to be loaded
        speech.addEventListener('voiceschanged', function() {
          var voices = window.speechSynthesis.getVoices();
          var janeVoice = voices.find(function(voice) {
            return voice.name === 'Google UK English Female';
          });
          speech.voice = janeVoice;
        
          window.speechSynthesis.speak(speech);
        });
      }
    </script>
  </head>
  <body>
    <h1>Text-to-Speech Example</h1>
    <textarea id="text" rows="4" cols="50" placeholder="Enter text here"></textarea><br />
    <button onclick="speakText()">Speak</button>
  </body>
</html>

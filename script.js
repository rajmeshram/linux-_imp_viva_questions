
window.addEventListener('load', function() {
  const audio = document.getElementById('background-sound');
  audio.volume = 0.5; // Set volume to 50%
  audio.play()
    .catch(function(error) {
      console.log("Audio playback failed:", error);
    });
});

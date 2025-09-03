window.onload = function() {
    const music = document.getElementById('birthdayMusic');
    const toggleBtn = document.getElementById('musicToggle');
    let isPlaying = true;

    toggleBtn.onclick = function() {
        if (isPlaying) {
            music.play();
            toggleBtn.textContent = "🔊 Music Off";
        } else {
            music.pause();
            toggleBtn.textContent = "🔇 Music On";
        }
        isPlaying = !isPlaying;
    };

    // Optional: handle autoplay restrictions
    music.play().catch(() => {
        toggleBtn.textContent = "🔇 Music On";
        isPlaying = false;
    });

};

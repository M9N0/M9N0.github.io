window.onload = function() {
    const music = document.getElementById('birthdayMusic');
    const toggleBtn = document.getElementById('musicToggle');
    let isPlaying = true;

    toggleBtn.onclick = function() {
        if (isPlaying) {
            music.pause();
            toggleBtn.textContent = "🔇 Music On";
        } else {
            music.play();
            toggleBtn.textContent = "🔊 Music Off";
        }
        isPlaying = !isPlaying;
    };

    // Optional: handle autoplay restrictions
    music.play().catch(() => {
        toggleBtn.textContent = "🔇 Music On";
        isPlaying = false;
    });
};
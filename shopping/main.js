document.addEventListener('DOMContentLoaded', function() {
    const animationOverlay = document.getElementById('animationOverlay');
    const mainContent = document.getElementById('mainContent');

    // After 3 seconds, hide the animation and show the main content
    setTimeout(() => {
        animationOverlay.style.display = 'none';
        mainContent.style.display = 'block';
    }, 3000);
});

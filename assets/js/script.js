document.addEventListener('DOMContentLoaded', () => {
    const funButton = document.getElementById('funButton');
    const surpriseMessage = document.getElementById('surpriseMessage');
    let surpriseShown = false;

    if (funButton && surpriseMessage) {
        funButton.addEventListener('click', () => {
            if (!surpriseShown) {
                // Show the message with animation
                surpriseMessage.style.display = 'block';
                // Use timeout to allow display:block to apply before adding class for transition
                setTimeout(() => {
                    surpriseMessage.classList.add('visible');
                }, 10); // Small delay

                // Change button text after click
                funButton.innerHTML = '<i class="fas fa-check"></i> See you soon!';
                surpriseShown = true;

                // Disable button after one click
                // funButton.disabled = true;
            } else {
                 // Hide the message again if clicked again
                surpriseMessage.classList.remove('visible');
                // reset button text or handle differently
                 setTimeout(() => {
                     if (!surpriseMessage.classList.contains('visible')) {
                         surpriseMessage.style.display = 'none';
                     }
                 }, 500); // Match transition duration in CSS
                 surpriseShown = false; // Allow it to be shown again
                 funButton.innerHTML = '<i class="fas fa-gift"></i> Click for a little sneak peek!'; // Reset text
            }
        });
    } else {
        console.error("Button or surprise message element not found!");
    }
});

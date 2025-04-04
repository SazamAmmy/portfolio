// Select the button
document.getElementById("funButton").addEventListener("click", function() {
    // Create a fun alert
    alert("Sudip is probably debugging life and code right now! 😂\nCheck back later for the real magic. 🚀");

    // Add a quick fade-out effect
    document.querySelector(".content-box").style.transition = "opacity 0.5s";
    document.querySelector(".content-box").style.opacity = "0.7";

    // Reset after 1 second
    setTimeout(() => {
        document.querySelector(".content-box").style.opacity = "1";
    }, 1000);
});

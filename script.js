// Get the elements
const landing = document.getElementById("landing");
const hacked = document.getElementById("hacked");
const startPrankButton = document.getElementById("startPrank");
const prankAudio = document.getElementById("prankAudio");
const funnyWarning = document.querySelector(".funny-warning");

// Start prank when "OK" button is clicked
startPrankButton.addEventListener("click", () => {
    // Hide the landing page
    landing.classList.add("hidden");

    // Show the hacked section
    hacked.classList.remove("hidden");

    // Play prank audio
    prankAudio.play();

    // Reveal funny warning after progress bar completes
    setTimeout(() => {
        funnyWarning.classList.remove("hidden");
    }, 5000); // 5 seconds for progress bar animation
});

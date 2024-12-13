// Get the elements
const landing = document.getElementById("landing");
const hacked = document.getElementById("hacked");
const startPrankButton = document.getElementById("startPrank");
const prankAudio = document.getElementById("prankAudio");
const matrixCanvas = document.getElementById("matrixRain");
const ctx = matrixCanvas.getContext("2d");
const consoleDiv = document.getElementById("console");
const countdownElement = document.getElementById("countdown");

// Start prank when "OK" button is clicked
startPrankButton.addEventListener("click", () => {
    // Hide the landing page
    landing.classList.add("hidden");

    // Show the hacked section
    hacked.classList.remove("hidden");

    // Play prank audio
    prankAudio.play();

    // Start typing commands
    typeCommands();

    // Start countdown timer
    startCountdown();
});

// Matrix Rain Animation
matrixCanvas.width = window.innerWidth;
matrixCanvas.height = window.innerHeight;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%^&*()";
const fontSize = 16;
const columns = matrixCanvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrixRain() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

    ctx.fillStyle = "#0F0";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(drawMatrixRain, 33); // Adjust speed of rain

// Typing commands
let commands = [
    "Accessing system...",
    "Uploading data to secret server...",
    "Cracking password...",
    "Injecting malware..."
];
let index = 0;

function typeCommands() {
    if (index < commands.length) {
        const p = document.createElement("p");
        p.textContent = commands[index++];
        consoleDiv.appendChild(p);
        setTimeout(typeCommands, 1500); // Adjust typing speed
    }
}

// Countdown Timer
let timeLeft = 10;

function startCountdown() {
    const interval = setInterval(() => {
        countdownElement.textContent = `Time left: ${timeLeft--} seconds`;
        if (timeLeft < 0) {
            clearInterval(interval);
            countdownElement.textContent = "Upload Complete!";
        }
    }, 1000);
}

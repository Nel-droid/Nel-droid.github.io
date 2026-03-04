const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(5, 5, 5, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00f3ff";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 50);

// Typing Effect
const textElement = document.querySelector(".typing-text");
const professions = ["RED TEAM ANALYST", "WEB VAPT SPECIALIST", "CYBERSECURITY STUDENT"];
let wordIdx = 0;
let charIdx = 0;
let isDeleting = false;

function type() {
    const currentWord = professions[wordIdx];
    const delay = isDeleting ? 50 : 150;

    if (!isDeleting && charIdx <= currentWord.length) {
        textElement.textContent = currentWord.substring(0, charIdx++);
    } else if (isDeleting && charIdx >= 0) {
        textElement.textContent = currentWord.substring(0, charIdx--);
    }

    if (charIdx > currentWord.length) {
        isDeleting = true;
        setTimeout(type, 2000);
    } else if (charIdx < 0) {
        isDeleting = false;
        wordIdx = (wordIdx + 1) % professions.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, delay);
    }
}

document.addEventListener("DOMContentLoaded", type);

// Background Animation
const canvas = document.getElementById('securityGrid');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = "01010101";
const drops = [];
const fontSize = 15;
const columns = canvas.width / fontSize;

for (let i = 0; i < columns; i++) drops[i] = 1;

function draw() {
    ctx.fillStyle = "rgba(8, 8, 8, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00f3ff";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    }
}
setInterval(draw, 50);

// Typing Effect
const textElement = document.querySelector(".typing-text");
const words = ["RED TEAM ANALYST", "CYBERSECURITY STUDENT", "ENGLISH INSTRUCTOR"];
let wordIdx = 0, charIdx = 0, isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIdx];
    textElement.textContent = isDeleting ? currentWord.substring(0, charIdx--) : currentWord.substring(0, charIdx++);

    if (!isDeleting && charIdx > currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
    } else if (isDeleting && charIdx < 0) {
        isDeleting = false;
        wordIdx = (wordIdx + 1) % words.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}
typeEffect();

// Background Matrix
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = "01";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function draw() {
    ctx.fillStyle = "rgba(5, 5, 5, 0.1)";
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
const textEl = document.querySelector(".typing-text");
const words = ["RED TEAM ANALYST", "OFFENSIVE SECURITY STUDENT", "ENGLISH LANGUAGE EXPERT"];
let wIdx = 0, cIdx = 0, isDel = false;

function type() {
    const word = words[wIdx];
    textEl.textContent = isDel ? word.substring(0, cIdx--) : word.substring(0, cIdx++);
    if (!isDel && cIdx > word.length) { isDel = true; setTimeout(type, 2000); }
    else if (isDel && cIdx < 0) { isDel = false; wIdx = (wIdx + 1) % words.length; setTimeout(type, 500); }
    else { setTimeout(type, isDel ? 50 : 100); }
}
type();

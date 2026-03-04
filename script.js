// 1. Particle Background Animation
const canvas = document.getElementById('securityGrid');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const numParticles = 80;

for (let i = 0; i < numParticles; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00f3ff';
    ctx.font = '10px monospace';
    particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.fillText('10', p.x, p.y);
    });
}
setInterval(draw, 30);

// 2. Typing Effect for the Header
const textElement = document.querySelector(".typing-text");
const professions = [
    "RED TEAMING & OFFENSIVE WEB SECURITY",
    "CYBERSECURITY STUDENT @ WEBSTER",
    "TECHNICAL DOCUMENTATION EXPERT",
    "ASPIRING ETHICAL HACKER"
];

let profIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentProf = professions[profIndex];
    
    if (isDeleting) {
        textElement.textContent = currentProf.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentProf.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentProf.length) {
        isDeleting = true;
        setTimeout(type, 2000); // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        profIndex = (profIndex + 1) % professions.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 50 : 100);
    }
}
document.addEventListener("DOMContentLoaded", type);

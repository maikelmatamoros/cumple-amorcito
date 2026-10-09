// Confetti: se crea una sola vez con animaciones infinitas
function createConfetti() {
    const container = document.getElementById('confetti-container');
    const colors = ['#ff6f91', '#ffb7b2', '#ff9aa2', '#ffdac1', '#e2f0cb', '#b5ead7', '#c7ceea', '#d4a373'];
    const confettiCount = 80;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 3 + 3) + 's';
        confetti.style.animationDelay = (Math.random() * 8) + 's';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        container.appendChild(confetti);
    }
}

createConfetti();

// Revelar secciones al hacer scroll
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Cupones: al hacer clic se dan vuelta
const coupons = document.querySelectorAll('.coupon');

coupons.forEach(coupon => {
    coupon.addEventListener('click', () => {
        coupon.classList.toggle('flipped');
    });
});

// Corazones flotantes de fondo: se crean una sola vez con animaciones infinitas
function createFloatingHearts() {
    const container = document.getElementById('hearts-container');
    const heartCount = 6;

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.textContent = '💖';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heart.style.setProperty('--drift', `${(Math.random() - 0.5) * 100}px`);
        heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
        heart.style.animationDelay = (i * 1.5) + 's';
        container.appendChild(heart);
    }
}

createFloatingHearts();

// Confetti
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
        confetti.style.animationDelay = (Math.random() * 5) + 's';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        container.appendChild(confetti);

        // Eliminar después de la animación
        setTimeout(() => {
            confetti.remove();
        }, 8000);
    }
}

// Lanzar confetti al cargar y cada cierto tiempo
createConfetti();
setInterval(createConfetti, 6000);

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

// Corazones flotantes adicionales de fondo
function createFloatingHeart() {
    const container = document.body;
    const heart = document.createElement('div');
    heart.textContent = '💖';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    heart.style.opacity = '0.4';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1';
    heart.style.transition = 'transform 8s linear, opacity 8s ease-in';
    container.appendChild(heart);

    setTimeout(() => {
        heart.style.transform = `translateY(-110vh) translateX(${(Math.random() - 0.5) * 100}px)`;
        heart.style.opacity = '0';
    }, 100);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createFloatingHeart, 2000);

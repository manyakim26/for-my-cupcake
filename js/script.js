// Floating Hearts Initialization
function initFloatingHearts() {
    const heartContainer = document.querySelector('.heart-container');
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heartContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 3000);
    }, 1000);
}

// Navigation
function smoothScroll(target) {
    const element = document.querySelector(target);
    element.scrollIntoView({ behavior: 'smooth' });
}

// Gallery Carousel with Swiper
function initGalleryCarousel() {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}

// Typewriter Effect
function initTypewriterEffect(element, text) {
    let index = 0;
    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }
    type();
}

// Countdown Timer
function initCountdown(duration) {
    let timer = duration, hours, minutes, seconds;
    const countdownElement = document.querySelector('.countdown');
    setInterval(() => {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        countdownElement.innerHTML = `${hours} : ${minutes} : ${seconds}`;

        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}

// Proposal Logic
function initProposalLogic() {
    const proposalButton = document.getElementById('proposal-button');
    proposalButton.addEventListener('click', () => {
        const proposalResponse = confirm('Will you marry me?');
        if (proposalResponse) {
            startConfetti();
        }
    });
}

// Confetti Effects
function startConfetti() {
    const confettiContainer = document.querySelector('.confetti');
    // Logic to display confetti
    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiContainer.appendChild(confettiPiece);
        // Animation logic for the confetti piece
    }
}

// Button Movement
function initButtonMovement() {
    const button = document.querySelector('.moveable-button');
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translate(10px, 10px)';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate(0, 0)';
    });
}

// Music Controls
function initMusicControls() {
    const playButton = document.getElementById('play-button');
    const audio = new Audio('path/to/music.mp3');
    playButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playButton.textContent = 'Pause';
        } else {
            audio.pause();
            playButton.textContent = 'Play';
        }
    });
}

// Sound Effects
function playSoundEffect() {
    const soundEffect = new Audio('path/to/effect.mp3');
    soundEffect.play();
}

// Accessibility Features
function enhanceAccessibility() {
    const elements = document.querySelectorAll('.accessible');
    elements.forEach(element => {
        element.setAttribute('tabindex', '0');
        element.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                element.click();
            }
        });
    });
}

// Initialize all features
function initAllFeatures() {
    initFloatingHearts();
    initGalleryCarousel();
    initTypewriterEffect(document.querySelector('.typewriter'), 'Welcome to the Cupcake World!');
    initCountdown(3600);
    initProposalLogic();
    initButtonMovement();
    initMusicControls();
    enhanceAccessibility();
}

document.addEventListener('DOMContentLoaded', initAllFeatures);
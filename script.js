// --- Dynamic Background video handled in CSS/HTML ---


// Scroll Reveal Animation (Existing)
const observerOptions = {

    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            entry.target.style.opacity = '1';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const scrollElements = document.querySelectorAll('.scroll-reveal');
scrollElements.forEach(el => observer.observe(el));

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 16, 32, 0.95)';
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.boxShadow = 'none';
        navbar.style.backdrobFilter = 'none';
    }
});

// --- Audio Toggle Logic ---
const audio = document.getElementById('bg-audio');
const soundToggle = document.getElementById('sound-toggle');
const soundIcon = soundToggle.querySelector('i');


// --- Mobile Menu Logic ---
const hamburger = document.querySelector('.hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    // Change icon?
    const icon = hamburger.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close menu when clicking a link
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.querySelector('i').classList.remove('fa-times');
        hamburger.querySelector('i').classList.add('fa-bars');
    });
});

soundToggle.addEventListener('click', () => {
    if (audio.paused) {
        // Explicitly set volume to 1 just in case
        audio.volume = 1.0;
        const playPromise = audio.play();

        if (playPromise !== undefined) {
            playPromise.then(() => {
                soundIcon.classList.remove('fa-volume-mute');
                soundIcon.classList.add('fa-volume-up');
                soundToggle.style.boxShadow = "0 0 20px rgba(251, 191, 36, 0.6)";
            }).catch(err => {
                console.error("Audio playback failed attempt:", err);
                // User interaction is key. Browser might still block if not "trusted" enough.
                alert("Por favor, interactúa con la página (haz click en cualquier lugar) e intenta nuevamente.");
            });
        }
    } else {
        audio.pause();
        soundIcon.classList.remove('fa-volume-up');
        soundIcon.classList.add('fa-volume-mute');
        soundToggle.style.boxShadow = "none";
    }
});

// Add a one-time click listener to document to unlock AudioContext if needed (common fix)
document.addEventListener('click', function unlockAudio() {
    // Try to check if we can play a silent sound or just prepare the audio tag
    // This often 'wakes up' the audio engine
    // We won't auto-play music here to be annoying, but we ensure the NEXT click works 100%
    document.removeEventListener('click', unlockAudio);
}, { once: true });


// --- Modal Logic ---
const modal = document.getElementById('registerModal');
const openModalBtns = document.querySelectorAll('.open-modal-btn'); // Use class for multiple buttons if needed
const closeModalBtn = document.querySelector('.close-btn');

// Open Modal
openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
});

// Close Modal
closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
});

// Close click outside
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});

// --- Form Submission Logic ---
const form = document.getElementById('registrationForm');
const formContainer = document.getElementById('form-container');
const successMessage = document.getElementById('success-message');
const closeModalAction = document.querySelector('.close-modal-action');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    // Simulate API call/processing
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerText;
    submitBtn.innerText = 'Redirigiendo a WhatsApp...';
    submitBtn.style.opacity = '0.7';

    // Construct WhatsApp Message
    const phoneNumber = "5492477614405"; // Updated Number
    const message = `Hola! Quiero inscribirme en Dueto de Almas.\n\n👤 Nombre: ${name}\n📱 Tel: ${phone}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
        // Open WhatsApp in new tab
        window.open(whatsappURL, '_blank');

        // Hide form, show success
        formContainer.style.display = 'none';
        successMessage.style.display = 'block';

        // Reset form for next time
        form.reset();
        submitBtn.innerText = originalText;
        submitBtn.style.opacity = '1';
    }, 1500); // 1.5s delay to read the button text
});

closeModalAction.addEventListener('click', () => {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';

    // Reset modal state after closing (optional, decided to keep it simple)
    setTimeout(() => {
        formContainer.style.display = 'block';
        successMessage.style.display = 'none';
    }, 500);
});


// --- Countdown Timer Logic ---
// Target Date: April 4, 2026 (Example date in April Phase)
const targetDate = new Date('April 4, 2026 00:00:00').getTime();

const timerInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        clearInterval(timerInterval);
        document.querySelector('.countdown-container').innerHTML = "<h3 style='color:var(--color-accent-gold)'>¡EL MOMENTO HA LLEGADO!</h3>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days < 10 ? '0' + days : days;
    document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
}

updateCountdown(); // Run immediately



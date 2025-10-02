const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Hero Banner Slideshow
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
    });
}
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}
setInterval(nextSlide, 5000);

// Scroll Animation
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
        if (scrollY + window.innerHeight - 100 > section.offsetTop) {
            section.classList.add('visible');
        }
    });

    // Back to Top Button
    const backToTop = document.getElementById('backToTop');
    if (scrollY > 300) { backToTop.style.display = 'block'; }
    else { backToTop.style.display = 'none'; }
});
document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Change icon between moon and sun
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = "☀️";
    } else {
        darkModeToggle.textContent = "🌙";
    }
});

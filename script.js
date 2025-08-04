document.addEventListener('DOMContentLoaded', function() {

    // --- 1. Hamburger Menu Logic (Existing) ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });


    // --- ✨ 2. NEW: Dynamic Header on Scroll ---
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });


    // --- ✨ 3. NEW: Scroll-Reveal Animations ---
    const revealElements = document.querySelectorAll('.section-title, .about-content, .timeline-item, .education-card, .project-card, .skill-category');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'visible' class to trigger the CSS transition
                entry.target.classList.add('visible');
                // Optional: Stop observing the element once it's visible
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Add the 'reveal' class to all target elements to set their initial state
    revealElements.forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });
    

    // --- ✨ 4. NEW: Typewriter Effect ---
    const typewriterElement = document.getElementById('typewriter');
    const textToType = "Software Engineer with 4 years of experience building and optimizing data solutions. Currently deepening my expertise through a Master's in Computer Vision and AI.";
    let charIndex = 0;

    function type() {
        if (charIndex < textToType.length) {
            typewriterElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(type, 30); // Adjust speed of typing here (milliseconds)
        }
    }

    // Start typing after a short delay
    setTimeout(type, 1500); // Delay before typing starts
});
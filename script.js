const sections = document.querySelectorAll('.hero, .content');
let currentSection = 0;
let scrolling = false;

window.addEventListener('wheel', (e) => {
    if (scrolling) return;
    scrolling = true;

    if (e.deltaY > 0 && currentSection < sections.length - 1) {
        currentSection++; 
    } else if (e.deltaY < 0 && currentSection > 0) {
        currentSection--; 
    }

    sections[currentSection].scrollIntoView({
        behavior: 'smooth'
    });

    setTimeout(() => scrolling = false, 800);
}, { passive: false });


window.addEventListener("scroll", () => {
    document.querySelectorAll(".card").forEach(card => {
        let position = card.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            card.classList.add("visible");
        }
    });
});

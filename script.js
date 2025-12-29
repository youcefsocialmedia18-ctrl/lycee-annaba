// التمرير بين القسمين فقط
const sections = document.querySelectorAll('.hero, .content');
let currentSection = 0;
let scrolling = false;

window.addEventListener('wheel', (e) => {
    if (scrolling) return;
    scrolling = true;

    if (e.deltaY > 0 && currentSection < sections.length - 1) {
        currentSection++; // النزول للقسم الثاني
    } else if (e.deltaY < 0 && currentSection > 0) {
        currentSection--; // الصعود للقسم الأول
    }

    sections[currentSection].scrollIntoView({
        behavior: 'smooth'
    });

    setTimeout(() => scrolling = false, 800);
}, { passive: false });

// أنيميشن البطاقات عند الاقتراب من الشاشة
window.addEventListener("scroll", () => {
    document.querySelectorAll(".card").forEach(card => {
        let position = card.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            card.classList.add("visible"); // اضف class visible بدلاً من تعديل transform مباشرة
        }
    });
});

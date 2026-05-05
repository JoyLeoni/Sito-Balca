const sections = document.querySelectorAll(".scroll-section");

function setSectionHeight() {
    sections.forEach(section => {
        const panels = section.querySelectorAll(".micro-panel");
        section.style.height = (panels.length * 100) + "vh";
    });
}

function handleScroll() {
    sections.forEach(section => {
        const container = section.querySelector(".scroll-container");
        const panels = section.querySelectorAll(".micro-panel");
        const rect = section.getBoundingClientRect();

        if (rect.top <= 0 && rect.bottom >= window.innerHeight) {

            const total = section.offsetHeight - window.innerHeight;
            const scrolled = Math.abs(rect.top);

            const progress = scrolled / total;
            const max = container.scrollWidth - window.innerWidth;

            container.style.transform = `translateX(-${progress * max}px)`;

            const index = Math.round(progress * (panels.length - 1));

            panels.forEach(p => p.classList.remove("active"));
            if (panels[index]) panels[index].classList.add("active");
        }
    });
}

window.addEventListener("scroll", handleScroll);

window.onload = () => {
    setSectionHeight();
    window.scrollTo(0,0);
};
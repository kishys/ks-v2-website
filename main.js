document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Add animation to project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        card.style.transform = 'scale(1.05)';
        setTimeout(() => {
            card.style.transform = 'translateY(-5px)';
        }, 200);
    });
});
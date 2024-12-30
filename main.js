// Smooth Scroll for "Get in Touch" Button
document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
});

// Project Filter
const filterButtons = document.querySelectorAll('.filter');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');

        projectCards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Skills Progress Bar Animation
window.addEventListener('scroll', function() {
    const skillBars = document.querySelectorAll('.skill-bar .progress');
    skillBars.forEach(skill => {
        const skillOffsetTop = skill.offsetTop;
        const windowBottom = window.scrollY + window.innerHeight;

        if (windowBottom > skillOffsetTop) {
            const fill = skill.querySelector('.fill');
            fill.style.transition = 'width 2s ease-in-out';
            fill.style.width = fill.getAttribute('data-width');
        }
    });
});

// Set Data Width for Skills
document.querySelectorAll('.skill-bar .fill').forEach(fill => {
    fill.setAttribute('data-width', fill.style.width);
    fill.style.width = '0%'; // Set initial value to 0
});

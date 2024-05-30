document.addEventListener('DOMContentLoaded', () => {
    const toggleNav = document.getElementById('toggleNav');
    const nav = document.querySelector('nav');

    toggleNav.addEventListener('click', () => {
        nav.classList.toggle('expanded');
        

        if (nav.classList.contains('expanded')) {
            toggleNav.name = 'chevron-back-circle-outline';
        } else {
            toggleNav.name = 'chevron-forward-circle-outline';
        }
    });
});
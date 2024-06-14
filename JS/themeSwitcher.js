document.addEventListener('DOMContentLoaded', function() {
    var moonIcon = document.querySelector('ion-icon[name="moon-outline"]');
    
    moonIcon.addEventListener('click', function() {
        document.body.classList.toggle('dark');
        document.querySelector('nav').classList.toggle('dark');
        document.querySelector('.profile-info').classList.toggle('dark');
        document.querySelector('.homeLinks').classList.toggle('dark');
        document.querySelectorAll('ion-icon').forEach(icon => icon.classList.toggle('dark'));
        document.querySelector('.profile ion-icon').classList.toggle('dark-background');
        document.querySelector('.menuFooter').classList.toggle('dark');
        document.querySelector('.headerBody').classList.toggle('dark');
        document.querySelector('.location').classList.toggle('dark');
        document.querySelector('.roof').classList.toggle('dark');
        document.querySelector('.projectsContainer').classList.toggle('dark');
        document.querySelector('.aboutInfoHeader').classList.toggle('dark');
        document.querySelector('.h2Service').classList.toggle('dark');
        document.querySelectorAll('.serviceItem').forEach(item => item.classList.toggle('dark'));
        document.querySelectorAll('.skillItem').forEach(item => item.classList.toggle('dark'));
        toggleTheme('header');
        toggleTheme('main');
        toggleTheme('footer');
        toggleIcon();
    });

    function toggleTheme(sectionId) {
        var section = document.querySelector('#' + sectionId);
        if (section) {
            section.classList.toggle('dark');
        }
    }

    function toggleIcon() {
        moonIcon.setAttribute('name', document.body.classList.contains('dark') ? 'sunny-outline' : 'moon-outline');
    }
})
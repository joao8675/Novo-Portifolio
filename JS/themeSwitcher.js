document.addEventListener('DOMContentLoaded', function() {
    var moonIcon = document.querySelector('ion-icon[name="moon-outline"]');
    
    
    moonIcon.addEventListener('click', function() {
        document.body.classList.toggle('dark');
        toggleTheme('nav');
        toggleTheme('header');
        toggleTheme('main');
        toggleTheme('footer');
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
});


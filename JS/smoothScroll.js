document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');

    for (const link of links) {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const targetID = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetID);

            targetElement.scrollIntoView({
                behavior: "smooth"
            });
        });
    }
}); 
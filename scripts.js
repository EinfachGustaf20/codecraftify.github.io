document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', revealOnScroll);

    function revealOnScroll() {
        var sections = document.querySelectorAll('.container');

        sections.forEach(function(section) {
            var position = section.getBoundingClientRect();

            // Wenn der Abschnitt im sichtbaren Bereich ist, füge eine Klasse hinzu, um die Animation auszulösen
            if (position.top <= window.innerHeight - 100) {
                section.classList.add('visible');
            }
        });
    }

    revealOnScroll(); // Führe die Funktion beim Laden der Seite aus
});

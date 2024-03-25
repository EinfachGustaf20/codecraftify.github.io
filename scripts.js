document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', revealOnScroll);

    function revealOnScroll() {
        var sections = document.querySelectorAll('.container');

        sections.forEach(function(section) {
            var position = section.getBoundingClientRect();

            if (position.top <= window.innerHeight - 100) {
                section.classList.add('visible');
            }
        });
    }

    revealOnScroll();
});

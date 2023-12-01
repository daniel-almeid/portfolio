document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-element');

    function checkFade() {
        fadeElements.forEach((element) => {
            const position = element.getBoundingClientRect();

            if (position.top < window.innerHeight * 0.85) {
                element.classList.add('fade-in');
            }
        });
    }

    checkFade();

    window.addEventListener('scroll', checkFade);
});

document.addEventListener("DOMContentLoaded", function() {
    const btnOpenImage = document.getElementById("btnOpenImage");

    btnOpenImage.addEventListener("click", function(event) {
        event.preventDefault();
        const imagePath = this.getAttribute("href");


        window.open(imagePath, "_blank");
    });
});


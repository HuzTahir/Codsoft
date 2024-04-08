document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        window.scrollTo({
            top:document.querySelector(this.getAttribute('href')).offsetTop,
            behavior: 'smooth'
        });
    });
});
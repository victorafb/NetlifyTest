document.addEventListener('DOMContentLoaded', function() {
    const rainContainer = document.querySelector('.rain-container');
    const ground = document.querySelector('.ground');

    function createRaindrop() {
        const raindrop = document.createElement('div');
        raindrop.classList.add('rain');
        raindrop.style.left = `${Math.random() * 100}%`;
        raindrop.style.animationDuration = `${0.5 + Math.random() * 0.5}s`;
        raindrop.style.animationDelay = `${Math.random() * 2}s`;
        rainContainer.appendChild(raindrop);

        raindrop.addEventListener('animationend', function() {
            createRipple(raindrop.style.left);
            raindrop.remove();
            createRaindrop();
        });
    }

    function createRipple(x) {
        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        ripple.style.left = x;
        ground.appendChild(ripple);

        ripple.addEventListener('animationend', function() {
            ripple.remove();
        });
    }

    for (let i = 0; i < 20; i++) {
        createRaindrop();
    }
});

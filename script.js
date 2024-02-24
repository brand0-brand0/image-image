document.addEventListener("DOMContentLoaded", function() {
    const slide = document.querySelector('.carouselSlide');
    const images = document.querySelectorAll('.carouselSlide img');
    let speed = 2; // Pixels moved per frame, adjust for speed
    let index = 0; // Current transform position

    // Clone images for a seamless loop
    images.forEach(image => {
        let clone = image.cloneNode(true);
        slide.appendChild(clone);
    });

    function moveCarousel() {
        index += speed;
        if (index >= slide.offsetWidth / 2) {
            index = 0; // Reset to start once it reaches the end of the original images
        }
        slide.style.transform = `translateX(-${index}px)`;
        requestAnimationFrame(moveCarousel); // Smooth animation
    }

    moveCarousel(); // Start the animation
});

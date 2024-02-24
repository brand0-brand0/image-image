document.addEventListener("DOMContentLoaded", function() {
    const slide = document.querySelector('.carouselSlide');
    let speed = 1; // Adjust speed as necessary
    let shiftAmount = 0; // Track the total amount shifted

    // Clone the entire slide for a seamless loop
    const clone = slide.cloneNode(true);
    slide.appendChild(clone);

    function moveCarousel() {
        shiftAmount += speed;
        if (shiftAmount > slide.offsetWidth) {
            shiftAmount = 0; // Reset shift amount when it exceeds half the width
        }
        slide.style.transform = `translateX(-${shiftAmount}px)`;

        requestAnimationFrame(moveCarousel);
    }

    moveCarousel();
});

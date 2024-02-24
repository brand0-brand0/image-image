<script>
const slide = document.querySelector('.carouselSlide');
let speed = 1; // Speed of the movement
let shiftPerFrame = speed * 0.5; // Shift per requestAnimationFrame call, adjust for speed
let totalWidth = slide.offsetWidth / 2; // Since images are duplicated, we use half the width for the reset point

function moveCarousel() {
    slide.style.transform = `translateX(-${shiftPerFrame}px)`;
    shiftPerFrame += speed;
    
    if (shiftPerFrame >= totalWidth) {
        shiftPerFrame = 0; // Reset shift to start when halfway through (end of original set)
    }
    
    requestAnimationFrame(moveCarousel); // Create smooth animation
}

moveCarousel(); // Start the animation
</script>

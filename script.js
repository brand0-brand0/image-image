document.addEventListener("DOMContentLoaded", function() {
    const carouselSlide = document.querySelector('.carouselSlide');
    const images = document.querySelectorAll('.carouselSlide img');
    
    // Clone each image and append to the carousel for a seamless loop
    images.forEach(image => {
        const clone = image.cloneNode(true);
        carouselSlide.appendChild(clone);
    });
});

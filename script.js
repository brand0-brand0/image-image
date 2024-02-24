document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.querySelector('.carousel-inner');
    const images = carouselInner.querySelectorAll('img');
    let width = 0;
  
    images.forEach(img => {
      width += img.offsetWidth;
    });
  
    carouselInner.style.width = `${width}px`;
  
    const animate = () => {
      const firstImage = carouselInner.firstElementChild;
      carouselInner.style.transition = 'transform 0.5s ease-in-out';
      carouselInner.style.transform = `translateX(-${firstImage.offsetWidth}px)`;
  
      setTimeout(() => {
        carouselInner.style.transition = 'none';
        carouselInner.appendChild(firstImage);
        carouselInner.style.transform = 'translateX(0)';
      }, 500);
  
      setTimeout(animate, 2500); // Adjust timing for animation loop
    };
  
    animate();
  });
  

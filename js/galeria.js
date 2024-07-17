let currentIndex = 0;

function showSlide(index) {
    const gallery = document.querySelector('.gallery');
    const totalItems = document.querySelectorAll('.gallery-item').length;
    
    if (index >= totalItems) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalItems - 1;
    } else {
        currentIndex = index;
    }
    
    const offset = -currentIndex * 100;
    gallery.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});

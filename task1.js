const filterButtons = document.querySelectorAll('.filter-btn');
const images = document.querySelectorAll('.image');

// Filter Functionality
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');

    images.forEach(image => {
      if (image.classList.contains(filter)) {
        image.classList.add('show');
      } else {
        image.classList.remove('show');
      }
    });
  });
});

// Lightbox Functionality
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
let currentImages = [];

function updateLightbox(index) {
  lightboxImg.src = currentImages[index].querySelector('img').src;
  currentIndex = index;
}

images.forEach((image, index) => {
  image.querySelector('img').addEventListener('click', () => {
    currentImages = [...document.querySelectorAll('.image.show')];
    updateLightbox(currentImages.indexOf(image));
    lightbox.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  updateLightbox(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % currentImages.length;
  updateLightbox(currentIndex);
});

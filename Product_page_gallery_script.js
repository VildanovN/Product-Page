const galleryThumbs = document.querySelector('.gallery__thumbs');
const listElems = galleryThumbs.querySelectorAll('li');

galleryThumbs.addEventListener('click', (event) => {
  const thumbnail = event.target.closest('img');

  if (!thumbnail) return;

  document.querySelector('.gallery__main-image').src = thumbnail.src;
  event.preventDefault();
});

const width = galleryThumbs.querySelector('img').parentElement.offsetWidth;
let count = (document.querySelector('.gallery__minor-images').clientWidth) / width;

let position = 0;

document.querySelector('.button_left').addEventListener('click', () => {
  position += width * count;
  position = Math.min(position, 0);
  galleryThumbs.style.marginLeft = `${position}px`;
});

document.querySelector('.button_right').addEventListener('click', () => {
  position -= width * count;
  position = Math.max(position, -width * (listElems.length - count));
  galleryThumbs.style.marginLeft = `${position}px`;
});

window.addEventListener('resize', () => {
  count = (document.querySelector('.gallery__minor-images').clientWidth) / width;
});

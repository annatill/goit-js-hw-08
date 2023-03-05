// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const makeImgEl = image => {
  const { original, preview, description } = image;
  return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
};

const ulEl = document.querySelector('.gallery');
const imageMarkup = galleryItems.map(makeImgEl).join('');
ulEl.insertAdjacentHTML('beforeend', imageMarkup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

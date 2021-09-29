import images from './app.js';

const imagesItem = document.querySelector('.js-gallery');
const closeModalRef = document.querySelector('button[data-action="close-lightbox"]');
const modalWindowRef = {
    lightbox: document.querySelector('.lightbox'),
    overlay: document.querySelector('.lightbox__overlay'),
    content: document.querySelector('.lightbox__content'),
    image: document.querySelector('.lightbox__image'),
    button: document.querySelector('.lightbox__button'),
};

function creatingElementsMarkup({ preview, original, description }) {
    const galeryItem = document.createElement('li');
    const galeryLink = document.createElement('a');
    const galeryImg = document.createElement('img');

    galeryItem.classList.add('gallery__item');
    galeryLink.classList.add('gallery__link')
    galeryImg.classList.add('gallery__image')

    galeryLink.href = original;
    galeryImg.src = preview;
    galeryImg.dataset.source = original;
    galeryImg.atl = description;

    galeryItem.appendChild(galeryLink);
    galeryLink.appendChild(galeryImg);

    return galeryItem;
};

const createItem = (items) => {
    const reateHtml = items.map(item => creatingElementsMarkup(item))

    imagesItem.append(...reateHtml)
}

createItem(images);

imagesItem.addEventListener('click', onGalleryItemClick)

function onGalleryItemClick(event) {
    event.preventDefault()

    if (event.target.nodeName === 'IMG') {

        modalWindowRef.image.src = event.target.dataset.source;
        modalWindowRef.lightbox.classList.add('is-open')
    };
};

closeModalRef.addEventListener('click', onCloseModal);

function onCloseModal() {
    modalWindowRef.lightbox.classList.remove('is-open');
    modalWindowRef.image.src = '';
}


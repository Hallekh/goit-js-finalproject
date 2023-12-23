import { galleryItems } from "./gallery-items.js";
// Change code below this line
const container = document.querySelector(".gallery");

function createMarkup(array) {
  return array
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
    )
    .join("");
}
console.log(container);
container.insertAdjacentHTML("afterbegin", createMarkup(galleryItems));

console.log(galleryItems);

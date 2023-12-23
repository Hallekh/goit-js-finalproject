import { galleryItems } from "./gallery-items.js";
// Change code below this line

const container = document.querySelector(".gallery");

function createMarkup(array) {
  return array
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`
    )
    .join("");
}
container.insertAdjacentHTML("afterbegin", createMarkup(galleryItems));

const lightbox = new SimpleLightbox(".gallery__link", {
  captions: true,
  captionDelay: 250,
  captionPosition: "bottom",
  captionsData: "alt",
  history: false,
});

container.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.closest(".gallery__link")) {
    lightbox.open();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    lightbox.close();
  }
});

console.log(galleryItems);

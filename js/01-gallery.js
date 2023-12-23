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
container.insertAdjacentHTML("afterbegin", createMarkup(galleryItems));

container.addEventListener("click", handlerItemClick);

function handlerItemClick(event) {
  event.preventDefault();
  if (event.currentTarget === event.target) {
    return;
  }
  const currentItem = event.target.closest(".gallery__item");
  const img = currentItem.querySelector(".gallery__image");

  const itemData = {
    original: img.dataset.source,
    description: img.alt,
  };

  showItem(itemData);
}

function showItem({ original, description }) {
  const instance = basicLightbox.create(
    `
        <div class="modal">
            <img
            src="${original}"
            alt="${description}"
            />
        </div>
    `,
    {
      handler: null,
      onShow(instance) {
        this.handler = onEscape.bind(instance);
        document.addEventListener("keydown", this.handler);
      },
      onClose() {
        document.removeEventListener("keydown", this.handler);
      },
    }
  );

  instance.show();
}

function onEscape({ code }) {
  if (code === "Escape") {
    this.close();
  }
}
console.log(galleryItems);

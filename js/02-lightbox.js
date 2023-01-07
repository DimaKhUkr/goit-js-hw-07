import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContEl = document.querySelector(".gallery");
galleryContEl.insertAdjacentHTML(
  "afterbegin",
  createGalleryItemList(galleryItems)
);

function createGalleryItemList(gallery) {
  return gallery
    .map((item) => {
      return `
      <a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`;
    })
    .join("");
}
// console.log(galleryItems);

galleryContEl.addEventListener("click", onGaleryImgClick);
let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
// console.log(gallery.defaultOptions);

function onGaleryImgClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  gallery;
  //   console.log("jmak");
}

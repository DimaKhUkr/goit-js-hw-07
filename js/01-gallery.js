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
      <div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </div>`;
    })
    .join("");
}
// console.log(createGalleryItemList(galleryItems));
// console.log(galleryItems);

galleryContEl.addEventListener("click", onGaleryImgClick);

function onGaleryImgClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  basicLightboxModalImgManage(e.target.dataset.source);
}

function basicLightboxModalImgManage(imgLink) {
  const instance = basicLightbox.create(
    `
    <img src="${imgLink}" width="800" height="600">
`,
    // {
    //   onShow: () => {
    //     window.addEventListener("keydown", OnEscButtonClick);
    //   },
    // },
    {
      onClose: () => {
        window.removeEventListener("keydown", OnEscButtonClick);
      },
    }
  );
  instance.show();
  const visible = basicLightbox.visible();
  if (visible) {
    window.addEventListener("keydown", OnEscButtonClick);
  }

  function OnEscButtonClick(e) {
    if (e.code === "Escape") {
      instance.close();

      console.log(e.code);
    }
  }
}

const galleryArr = [];

const createGallery = (arr) => {
  for (let i = 0; i < 15; i++) {
    arr.push(`./assets/images/gallery/${i}-pic.jpg`);
  }

  arr.map((image, i) => {
    let imgEl = document.createElement("img");
    imgEl.src = image;
    imgEl.className = "photo";

    let listEl = document.createElement("li");
    listEl.className = "img-list";

    document.querySelector("#gallery-section").appendChild(listEl);
    document.querySelector(".img-list").appendChild(imgEl);
    console.log(document.querySelector(".img-list").appendChild(imgEl));

    // `<img src="${image}" alt="band" class="thumbnail />`);
  });
};

createGallery(galleryArr);

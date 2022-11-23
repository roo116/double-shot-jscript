const fs = require("fs");
const testDir = "../images/gallery";
const galleryImg = [];

const getGalleryImage = () => {
  fs.readdir(testDir, (err, files) => {
    files.forEach((file) => galleryImg.push(file));
    galleryImg.shift();
    return galleryImg;
  });
};

module.exports = {getGalleryImage}

// .then(function createGallery(galleryImg) {
//   galleryImg.forEach((img) => {
//     document.getElementByID("gallery").createElement("img").appendChild;
//   });
// });

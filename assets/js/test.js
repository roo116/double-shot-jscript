const fs = require("fs");
const testDir = "../images/gallery";
const galleryImg = []



fs.readdir(testDir, (err, files) => {
    files.forEach(file => galleryImg.push(file))
    console.log(galleryImg)
    galleryImg.shift()
    console.log(galleryImg[0])

  })
  
  
  
  
  
//   .then(function createGallery(galleryImg) {
//     galleryImg.forEach(img => {
//       if(!".DS_Store")
//       document.getElementByID("gallery").createElement("img")
//     })
//   })}
//const images = ["0.jpg", "1.jpg", "2.jpg"];
const images = [
  "https://www.nasa.gov/sites/default/files/thumbnails/image/main_image_star-forming_region_carina_nircam_final-5mb.jpg",
  "https://images-assets.nasa.gov/image/iss040e080833/iss040e080833~orig.jpg",
  "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg",
  "https://images.pexels.com/photos/11577587/pexels-photo-11577587.jpeg",
  "https://images.pexels.com/photos/4943085/pexels-photo-4943085.jpeg",
  "https://images.pexels.com/photos/2885320/pexels-photo-2885320.jpeg",
  "https://blogfiles.pstatic.net/MjAxODAzMTlfMjI3/MDAxNTIxNDQ4Nzg1Njc2.z4XCTrb3ZkjSmJt3M0pOZM1Me6HM8vyv6n2Fne9-Ivsg.drTGOvcmJk-socyfhc_yov6mW75K1qEu4i3v7T_KXJkg.JPEG.knicjin/beautiful_nature_wallpaper06.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

//bgImage.src = `img/${chosenImage}`;
bgImage.src = chosenImage;

document.body.appendChild(bgImage);

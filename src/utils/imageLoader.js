// utils/imageLoader.js

// Function to import all images by their file path (no alt text here)
function importAll(r) {
  let images = {};
  r.keys().forEach((item) => {
    const imageName = item.replace('./', '');
    images[imageName] = r(item);  // Only the image source (file path)
  });
  return images;
}

// Import all images without alt text (alt will be defined in CardData)
const images = importAll(require.context('../media', true, /\.(jpg|jpeg|png)$/));

export default images;

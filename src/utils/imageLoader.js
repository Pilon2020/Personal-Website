function importAll(r) {
  let images = {};
  r.keys().forEach((item) => {
    const imageName = item.replace('./', '');
    images[imageName] = r(item);
  });
  return images;
}

// Assuming you're exporting it or using it in some way
const images = importAll(require.context('../media', true, /\.(jpg|jpeg|png)$/));

// Make sure to use the 'images' variable somewhere in your code
export default images;

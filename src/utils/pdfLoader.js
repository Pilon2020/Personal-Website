function importAll(r) {
    let pdfs = {};
    r.keys().forEach((item) => {
      pdfs[item.replace('./', '')] = r(item);
    });
    return pdfs;
  }
  
  const pdfs = importAll(require.context('../media', true, /\.pdf$/));
  export default pdfs;
  
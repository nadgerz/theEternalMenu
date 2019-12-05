const fs = require('fs');

const imgPath = '../../frontend/src/assets/imgs/default.png';
const imgData = fs.readFileSync(imgPath);
const contentType = 'image/png';

const defaultImage = {
  imgData,
  contentType,
};

module.exports = defaultImage;

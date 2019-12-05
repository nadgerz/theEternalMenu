const mongoose = require('mongoose');
const fs = require('fs');
const { recipeModelErrorMsgs: errMsgs } = require('./modelErrorMsgs');
// const defaultImg = require('../../../frontend/src/assets/imgs/default.png');
// const defaultImg = require('../../config/utils/storeImg');

const imgPath = '../../../frontend/src/assets/imgs/default.png';
// const imgData = fs.readFileSync(imgPath);
// const contentType = 'image/png';

const defaultImg = {
  imgData: fs.readFileSync(imgPath),
  contentType: 'image/png',
};

const RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, errMsgs.TITLE.REQUIRED],
    minlength: [2, errMsgs.TITLE.TOO_SHORT],
    maxlength: [30, errMsgs.TITLE.TOO_LONG],
  },
  created: {
    type: Date,
    default: Date.now,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
  img: {
    data: Buffer,
    contentType: String,
    default: {
      data: defaultImg.imgData,
      contentType: defaultImg.contentType,
    },
  },
  favourite: {
    type: Boolean,
    default: false,
  },
  versions: [
    {
      type: Object,
    },
  ],
  users: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'user',
    },
  ],
});

const RecipeModel = mongoose.model('recipe', RecipeSchema);

module.exports = RecipeModel;

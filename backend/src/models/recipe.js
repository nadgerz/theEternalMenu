const mongoose = require('mongoose');
const { recipeModelErrorMsgs: errMsgs } = require('./modelErrorMsgs');
// const defaultImg = require('../../../frontend/src/assets/imgs/default.png');

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
    type: String,
    default: 'assets/imgs/default.png',
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

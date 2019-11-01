const BaseService = require('./base-service');
const RecipeModel = require('../models/recipe');

class RecipeService extends BaseService {
  constructor() {
    console.log(__dirname);
    super(RecipeModel, `${__dirname}/../recipe-database.json`);
  }

  // delete(itemID) {
  //
  //   super.delete(itemID);
  // }
}

module.exports = new RecipeService();

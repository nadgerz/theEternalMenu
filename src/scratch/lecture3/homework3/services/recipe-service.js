const BaseService = require('./base-service');
const RecipeModel = require('../models/recipe');

class RecipeService extends BaseService {
  constructor() {
    console.log(__dirname);
    super(RecipeModel, `${__dirname}/../meetup-database.json`);
  }
}

module.exports = new RecipeService();

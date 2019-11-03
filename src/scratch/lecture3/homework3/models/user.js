const uuidv1 = require('uuid/v1');
const Recipe = require('./recipe');
const RecipeService = require('../services/recipe-service');

module.exports = class User {
  constructor(name, email, password, id, recipes = []) {
    this.name = name;
    // TODO: discuss this code with Steve
    this.id = id || `${name.replace(' ', '').toLowerCase()}-${uuidv1()}`;
    this.email = email;
    this.password = password;

    this.recipes = recipes;
  }

  addRecipe(title, version) {
    const fresh = (new Recipe(title)).addVersion(version);

    this.recipes.map(recipe => recipe.title).includes(title) ?
      console.log('no duplicated recipe title allowed')
      : this.recipes.push(fresh);

    RecipeService.add(fresh);
  }

  deleteRecipeById(id) {
    this.recipes = this.recipes.filter(recipe => recipe.id !== id);
  }

  getRecipeById(id) {
    const recipeIndex = this.recipes.findIndex(recipe => recipe.id === id);
    return this.recipes[recipeIndex];
  }

  static create({ name, email, password, id, recipes }) {
    const user = new User(name, email, password, id);

    user.recipes = recipes.map(recipe => Recipe.create(recipe));

    return user;
  }
};
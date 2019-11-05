const uuidv1 = require('uuid/v1');
const Recipe = require('./recipe');
// const UserService = require('../services/user-service');

module.exports = class User {
  constructor(name, email, password, id, recipes = []) {
    this.name = name;
    // TODO: discuss this code with Steve
    this.id = id || `${name.replace(' ', '').toLowerCase()}-${uuidv1()}`;
    this.email = email;
    this.password = password;

    this.recipes = recipes;
  }

  save() {
    console.log('In save()');
    console.log(this);

    /*
    try {
      UserService.update(this);
    } catch (err) {
      throw new Error(err.message);
    }
	*/
  }

  saveRecipe(title, version) {
    const recipe = new Recipe(title);
    recipe.saveVersion(version);

    if (this.titleExists(title)) {
      console.log('no recipe title duplicate allowed');
      return;
    }

    this.recipes.push(recipe);
  }

  titleExists(title) {
    return this.recipes.map(recipe => recipe.title).includes(title);
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

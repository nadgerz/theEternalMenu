const uuidv1 = require('uuid/v1');
const Recipe = require('./recipe');

const User = class {
  constructor(name, email, password) {
    this.name = name;
    this.id = `${name.replace(' ', '').toLowerCase()}-${uuidv1()}`;
    this.email = email;
    this.password = password;

    this.recipes = [];
  }

  getRecipeIndexById(id) {
    return this.recipes.map(recipe => recipe.id).indexOf(id);
  }

  // getNextRecipeId() {
  //   return this.recipes[this.recipes.length - 1].id + 1;
  // }

  addRecipe(title, details) {
    this.recipes.map(recipe => recipe.title).includes(title) ?
      console.log('no duplicated recipe title allowed')
      : this.recipes.push(new Recipe(title, details));
  }

  deleteRecipeById(id) {
    this.recipes = this.recipes.filter(recipe => recipe.id !== id);
  }

  getRecipeById(id) {
    let index = this.getRecipeIndexById(id);
    return this.recipes[index];
  }

  setEmail(newEmail) {
    this.email = newEmail;
  }

  setUserName(newName) {
    this.name = newName;
  }

  setPassword(newPassword) {
    this.password = newPassword;
  }
};

module.exports = User;

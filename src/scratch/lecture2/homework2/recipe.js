const uuidv1 = require('uuid/v1');
const RecipeVersion = require('./recipeVersion');


const Recipe = class {
  constructor(title, details) {
    this.title = title;
    this.id = `${this.title}-${uuidv1()}`;
    // this.images = [] // TODO: implement an images array
    this.dateCreated = new Date;
    // TODO: limit versions array to... 15?
    this.versions = [];
    this.versions.push(new RecipeVersion(details, this.versions.length + 1));
  }

  setTitle(newTitle) {
    this.title = newTitle;
  }

  addVersion(newVersion) {
    let id = this.getNextVersionId();
    this.versions.push(new RecipeVersion(newVersion, id));
  }

  getNextVersionId() {
    return this.versions[this.versions.length - 1].id + 1;
  };

  getVersion(versionNo) {
    return this.versions[versionNo - 1];
  }

  deleteVersionById(id) {
    this.versions = this.versions.filter(version => version.id !== id);
  }

  // TODO: hide these functions?
  getVersionIndexById(id) {
    return this.versions.map(version => version.id).indexOf(id);
  }

  // getIngredientIndexById(id) {
  //   return this.versions.ingredients.map(ingredient => ingredient.id).indexOf(id);
  // }
  //
  // getNextIngredientId(versionId) {
  //   const currentVersion = this.versions[this.getVersionIndexById(versionId)];
  //   const arrLength = currentVersion.ingredients.length;
  //
  //   return arrLength === 0 ? 1 : currentVersion.ingredients[arrLength - 1].id + 1;
  // };
  //
  // addIngredient(versionId, ingredient) {
  //   let index = this.getVersionIndexById(versionId);
  //
  //   index < 0
  //     ? console.log('index out of bounds')
  //     : this.versions[index].ingredients.push(new Ingredient(ingredient, this.getNextIngredientId(versionId)));
  // }

  // deleteIngredient(versionId, ingredientId) {
  //   const versionIndex = this.getVersionIndexById(versionId);
  //   const ingredientIndex = this.getIngredientIndexById(ingredientId);
  //   let targetIngredientsArray = this.versions[versionIndex].ingredients;
  //
  //   targetIngredientsArray = targetIngredientsArray.filter((ingredient) => ingredient.id !== ingredientIndex);
  // }
  //
  // setIngredients(versionId, ingredients) {
  //   this.versions[this.getVersionIndexById(versionId)].setIngredients(ingredients);
  // }

};

module.exports = Recipe;

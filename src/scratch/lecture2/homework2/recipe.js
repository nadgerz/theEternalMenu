const Ingredient = require('./ingredient');
const RecipeVersion = require('./recipeVersion');

const Recipe = class {
  constructor(title, howTo) {
    this._title = title;
    // this.id // TODO: UUID
    // this.images = [] // TODO: implement an images array
    // TODO: SOLVE problem with version ID (e.g. what to do in case of a deletion?)
    // TODO: limit versions array to... 15?
    this._versions = [];
    this._versions.push(new RecipeVersion(howTo, this._versions.length + 1));
  }

  set title(title) {
    // TODO: check it is present and unique
    this._title = title;
  }

  //templateCopy : use in different function, to FILL form fields from
  addVersion(newVersion) {
    const id = this.getNextVersionId();
    this.versions.push(new RecipeVersion(newVersion, id));
  }

  getNextVersionId() {
    return this.versions[this.versions.length - 1].id + 1;
  }

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

  getIngredientIndexById(id) {
    return this.versions.ingredients
      .map(ingredient => ingredient.id)
      .indexOf(id);
  }

  getNextIngredientId(versionId) {
    const currentVersion = this.versions[this.getVersionIndexById(versionId)];
    const arrLength = currentVersion.ingredients.length;

    return arrLength === 0
      ? 1
      : currentVersion.ingredients[arrLength - 1].id + 1;
  }

  addIngredient(versionId, ingredient) {
    let index = this.getVersionIndexById(versionId);

    index < 0
      ? console.log('index out of bounds')
      : this.versions[index].ingredients.push(
          new Ingredient(ingredient, this.getNextIngredientId(versionId)),
        );
  }

  deleteIngredient(versionId, ingredientId) {
    const versionIndex = this.getVersionIndexById(versionId);
    const ingredientIndex = this.getIngredientIndexById(ingredientId);
    let targetIngredientsArray = this.versions[versionIndex].ingredients;

    targetIngredientsArray = targetIngredientsArray.filter(
      ingredient => ingredient.id !== ingredientIndex,
    );
  }

  addIngredients(ingredients, versionId) {
    // push?
    this.versions[this.getVersionIndexById(versionId)].ingredients = [
      ingredients,
    ];
  }

  setCookingTime(version, time) {
    let index = this.getVersionIndexById(version);

    // TODO check cookingTime is a typeof number
    this.versions[index].cookingTime = time;
  }

  // TODO set instructions
  addInstructions(version, instructions) {
    // TODO const?
    let index = this.getVersionIndexById(version);
    // TODO what if not found?

    this.versions[index].instructions = instructions;
  }

  // TODO set notes - as per instructions...
  addNotes(version, note) {
    let index = this.getVersionIndexById(version);
    this.versions[index].notes = note;
  }
};

module.exports = Recipe;

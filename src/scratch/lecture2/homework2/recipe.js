const Ingredient = require('./ingredient');

const RecipeVersion = class {
  constructor(
    {
      cookingTime = 0,
      servingSize = 0,
      ingredients = [],
      instructions = [],
      notes = [],
      tags = [],
    },
    id,
  ) {
    this.id = id;
    this.cookingTime = cookingTime;
    this.servingSize = servingSize;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.notes = notes;
    this.tags = tags;
  }
};

const Recipe = class {
  constructor(title, howTo) {
    this.title = title;
    // this.id // TODO: UUID
    // this.images = [] // TODO: implement an images array
    // TODO: SOLVE problem with version ID (e.g. what to do in case of a deletion?)
    // TODO: limit versions array to... 15?
    this.versions = [];
    this.versions.push(new RecipeVersion(howTo), this.versions.length + 1);
  }

  setTitle(newTitle) {
    this.title = newTitle;
  }

  //templateCopy : use in different function, to FILL form fields from
  addVersion(newVersion) {
    let id = this.getNextVersionId();
    this.versions.push(new RecipeVersion(newVersion, id));
  }

  getNextVersionId() {
    return this.versions[this.versions.length - 1].id + 1;
  };

  getNextIngredientId(versionId) {
    let currentVersion = this.versions[this.getVersionIndexById(versionId)];
    return (currentVersion.ingredients[currentVersion.ingredients.length - 1].id + 1);
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

  getIngredientIndexById(id) {
    return this.versions.ingredients.map(ingredient => ingredient.id).indexOf(id);
  }

  addIngredient(versionId, ingredient) {
    let index = this.getVersionIndexById(versionId);

    index < 0
      ? console.log('index out of bounds')
      : this.versions[index].ingredients.push(new Ingredient(ingredient, getNextIngredientId(versionId)));
  }

  deleteIngredient(versionId, ingredientId) {
    const versionIndex = this.getVersionIndexById(versionId);
    const ingredientIndex = this.getIngredientIndexById(ingredientId);
    let targetIngredientsArray = this.versions[versionIndex].ingredients;

    targetIngredientsArray = targetIngredientsArray.filter((ingredient) => ingredient.id !== ingredientIndex);
  }

  addIngredients(ingredients, versionId) {
    // push?
    this.versions[this.getVersionIndexById(versionId)].ingredients = [ingredients];
  }

  setCookingTime(version, time) {
    let index = this.getVersionIndexById(version);
    this.versions[index].cookingTime = time;
  }

  addInstructions(version, instructions) {
    let index = this.getVersionIndexById(version);
    this.versions[index].instructions = instructions;
  }

  addNotes(version, note) {
    let index = this.getVersionIndexById(version);
    this.versions[index].notes = note;
  }
};

module.exports = Recipe;

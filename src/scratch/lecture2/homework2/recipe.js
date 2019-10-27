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

const Ingredient = class {
  constructor({ amount = 0.0, unit = '', name, sub = [] }) {
    this.amount = amount;
    this.unit = unit;
    this.name = name;
    this.sub = sub;
  }
};

const Recipe = class {
  constructor(title, howTo) {
    this.title = title;
    // this.id // TODO: ID (should include the id of the user who generated the recipe),
    // this.images = [] // TODO: implement an images array
    // TODO: SOLVE problem with version ID (e.g. what to do in case of a deletion?)
    this.versions = [new RecipeVersion(howTo, 1)]; // TODO: limit versions array to... 15?
  }

  setTitle(newTitle) {
    this.title = newTitle;
  }

  //templateCopy : use in different function, to FILL form fields from
  // TODO: does the newVersion HAVE to be different from old version?
  addVersion(newVersion) {
    // let id = this.versions.length + 1;
    // idea for fix: when a new Version is generated, an older version was used as a template, so there already existed an id
    let id = newVersion.id + 1;

    this.versions.push(new RecipeVersion(newVersion, id));
  }

  getVersion(versionNo) {
    return this.versions[versionNo - 1];
  }

  deleteVersion(toDelete) {}

  // TODO: hide this function
  getVersionIndex(version) {
    // add all ids of existing versions to an array, find index of the version ID you're looking for in it
    let index = this.versions.map(elem => elem.id).indexOf(version.id);
    return index;
  }

  addIngredient(version, ingredient) {
    console.log(version);
    let index = this.getVersionIndex(version);

    console.log('index:' + index);
    index < 0
      ? console.log('index out of bounds')
      : this.versions[index].ingredients.push(new Ingredient(ingredient));
  }

  deleteIngredient(version, toDelete) {
    let versionIndex = this.getVersionIndex(version);
    let ingredientIndex = this.versions[versionIndex].ingredients.indexOf(
      toDelete,
    );

    this.versions[versionIndex].ingredients.splice(ingredientIndex, 1);
  }

  setCookingTime(version, time) {
    let index = this.getVersionIndex(version);
    this.versions[index].cookingTime = time;
  }

  addInstructions(version, instructions) {
    let index = this.getVersionIndex(version);
    this.versions[index].instructions = instructions;
  }

  addNotes(version, note) {
    let index = this.getVersionIndex(version);
    this.versions[index].notes = note;
  }
};

module.exports = Recipe;

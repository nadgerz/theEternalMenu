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
    this._id = id;

    this.cookingTime = cookingTime;
    this.servingSize = servingSize;
    this._ingredients = ingredients;
    this.instructions = instructions;
    this.notes = notes;
    this.tags = tags;
  }

  get id() {
    return this._id;
  }

  set id(id) {
    // TODO - check for integrity?
    this._id = id;
  }

  get instructions() {
    return this._instructions;
  }

  set instructions(instructions) {
    // TODO - check for integrity?
    this._instructions = instructions;
  }
};

module.exports = RecipeVersion;

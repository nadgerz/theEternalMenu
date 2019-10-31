const Ingredient = require('./recipeIngredient');


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

    this.ingredients = ingredients.map((ingredient, index) => {
      return new Ingredient(ingredient, index + 1);
    });

    this.instructions = instructions;
    this.notes = notes;
    this.tags = tags;
  }

  get() {
    return this;
  }

};

module.exports = RecipeVersion;

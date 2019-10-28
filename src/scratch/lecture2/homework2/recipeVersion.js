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

  get() {
    return this;
  }

  // setVersion({
  //              cookingTime,
  //              servingSize,
  //              ingredients,
  //              instructions,
  //              notes,
  //              tags,
  //            }) {
  //   this.cookingTime = cookingTime;
  //   this.servingSize = servingSize;
  //   this.ingredients = ingredients;
  //   this.instructions = instructions;
  //   this.notes = notes;
  //   this.tags = tags;
  // };
  //
  // setIngredients(ingredients) {
  //   this.ingredients = ingredients;
  // }
  //
  // getIngredientIndexById(id) {
  //   return this.ingredients.map(ingredient => ingredient.id).indexOf(id);
  // }
};

module.exports = RecipeVersion;

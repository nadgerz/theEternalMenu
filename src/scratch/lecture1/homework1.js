const mockRecipes = require('./recipes');
const users = [];
// TODO: set up for language switch

const User = class {
  constructor(name, email, password) {
    this.name = name;
    this.id = `user-${name.replace(' ', '').toLowerCase()}`; // TODO: UUID
    this.email = email;
    this.password = password;

    this.recipes = [];
  }

  addRecipe(newRecipe) {
    this.recipes.push(newRecipe);
  }

  updateRecipe(editedRecipe) {
    let index = this.recipes.indexOf(editedRecipe);
    this.recipes.splice(index, 1, editedRecipe);
  }

  deleteRecipe(toDelete) {
    let index = this.recipes.indexOf(toDelete);
    this.recipes.splice(index, 1);
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

const RecipeVersion = class {
  constructor({
                cookingTime = 0,
                servingSize = 0,
                ingredients = [],
                instructions = [],
                notes = [],
                tags = [],
              }) {
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
    // this.id // TODO: ID (should include the id of the user who generated the recipe),
    this.versions = [new RecipeVersion(howTo)];
  }

  getVersionIndex(version) {
    return this.versions.indexOf(version);
  }

  addIngredient(version, ingredient) {
    let index = this.getVersionIndex(version);
    this.versions[index].ingredients.push(new Ingredient(ingredient));
  }

  deleteIngredient(toDelete) {
    let index = this.ingredients.indexOf(toDelete);
    this.ingredients.splice(index, 1);
  }

  setCookingTime(time) {
    this.cookingTime = time;
  }

  addInstructions(instructions) {
    this.instructions = instructions;
  }

  addNotes(note) {
    this.notes = note;
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

const tags = {
  mealType: ['Breakfast & Brunch', 'Lunch', 'Dinner', 'Desserts'],
  dishType: [
    'Appetizers & Snacks',
    'Bread Recipes',
    'Cake Recipes',
    'Candy and Fudge',
    'Casserole Recipes',
    'Cocktails',
    'Cookies',
    'Fish Recipes',
    'Main Dishes',
    'Pasta',
    'Pie',
    'Pizza',
    'Salads',
    'Sandwiches',
    'Sauces and Condiments',
    'Side Dishes',
    'Smoothies',
    'Soups, Stews, and Chilis',
  ],
  season: [
    'Spring',
    'Easter ',
    'Summer',
    'Autumn',
    'Halloween',
    'Thanksgiving',
    'Winter',
    'Christmas',
    'More',
  ],

  worldRegion: ['Chinese', 'Indian', 'Italian', 'Mexican', 'Southern', 'Thai'],

  healthDiet: [
    'Dairy Free',
    'Diabetic',
    'Gluten Free',
    'Low Calorie',
    'Low Carb',
    'Pescatarian',
    'Vegetarian',
    'Vegan',
    'Add More',
  ],
};

// let test = { amount: 1, unit: 'lb', name: 'carrot', sub: [] };
// let testIngr = new Ingredient(test);
//
// console.log(testIngr);

let user1 = new User('Antonia', 'Antonia@mail.com', '1234');
let user2 = new User('Berta', 'Berta@mail.com', 'qwerty');
let user3 = new User('Chris', 'Chris@mail.com', 'qwertz');

// console.log( user1, user2, user3 );

// let recipe1 = new Recipe(
//   mockRecipes[1].title,
//   mockRecipes[1].cookingTime,
//   mockRecipes[1].servingSize,
//   mockRecipes[1].ingredients,
//   mockRecipes[1].instructions,
//   mockRecipes[1].notes,
//   mockRecipes[1].tags,
// );
let recipe2 = new Recipe(mockRecipes[1].title, mockRecipes[1].versions[0]);

console.log(recipe2);

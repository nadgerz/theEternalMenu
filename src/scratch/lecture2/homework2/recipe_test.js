const mockRecipes = require('./recipes');
const Recipe = require('./recipe');


let recipe1 = new Recipe(mockRecipes[1].title, mockRecipes[1].versions[0]);

let testVersion = {
  id: 2,
  cookingTime: 10,
  servingSize: 4,

  ingredients: [],

  instructions: [],

  notes: [],

  tags: {
    mealType: [],
    dishType: [],
    season: [],
    worldRegion: [],
    healthDiet: [],
  },
};

recipe1.addVersion(testVersion);
// console.log(recipe1.versions);

let testIngredient = {
  amount: 1,
  unit: 'tablespoon',
  name: 'garlic',
  sub: [],
};

console.log('==============');
// console.log(recipe1.getVersionIndex(testVersion));

recipe1.addIngredient(testVersion, testIngredient);
console.log(recipe1.versions);

// TESTS
// addVersion: works
// addIngredient: works
// getVersion: works
// getVersionID: works

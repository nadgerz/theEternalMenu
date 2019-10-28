const User = require('./user');
const mockRecipes = require('./recipes');
let [recipe1, recipe2, recipe3] = mockRecipes;

// TESTS
// addRecipe:
// getRecipeById:
// deleteRecipeById:

let user1 = new User('Antonia', 'Antonia@mail.com', '1234');
let user2 = new User('Berta', 'Berta@mail.com', 'qwerty');
let user3 = new User('Chris', 'Chris@mail.com', 'qwertz');

// console.log(user1, user2, user3);

// addRecipe
// console.log('======================================');
// console.log(recipe1.versions[0]);
// user1.addRecipe(recipe1.title, recipe1.versions[0]);
console.log(user1.recipes);


console.log('======================================');
mockRecipes.forEach(recipe => user1.addRecipe(recipe.title, recipe.versions[0]));

console.log(user1.recipes);







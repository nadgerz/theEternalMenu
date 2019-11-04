const User = require('./models/user');
const Recipe = require('./models/recipe');

// const RecipeService = require('./services/recipe-service');
const UserService = require('./services/user-service');

let mockRecipes = require('./models/recipes');

console.log('The Eternal Menu!');
console.log('============================================');

async function main() {
  let user1 = new User('Antonia', 'Antonia@mail.com', '1234');
  // await UserService.add(user1);
  // console.log(await UserService.findAll());
  // const user1 = await UserService.findAll()[0];

  let user2 = new User('Berta', 'Berta@mail.com', 'qwerty');
  let user3 = new User('Chris Christofferson', 'Chris@mail.com', 'qwertz');

  let [recipe1, recipe2, recipe3] = mockRecipes;

  // let users = [user1, user2, user3];
  // console.log(user1);

  const eggVersion1 = {
    cookingTime: 7,
    ingredients: [],
  };

  const eggVersion2 = {
    cookingTime: 8.5,
    ingredients: [],
  };

  const eggVersion3 = {
    cookingTime: 5,
    ingredients: [],
  };

  const eggVersion4 = {
    cookingTime: 10,
    ingredients: [],
  };

  const eggIngredients = [
    {
      amount: 1,
      name: 'egg',
    },
  ];

  // console.log('adding recipe ===========================');
  user1.saveRecipe('eggs', eggVersion1);
  // console.log(user1);

  const eggRecipe = user1.getRecipeById(user1.recipes[0].id);
  // console.log('version 2 ===========================');
  eggRecipe.saveVersion(eggVersion2);
  eggRecipe.saveVersion(eggVersion3);
  eggRecipe.saveVersion(eggVersion4);

  // console.log('delete version 2 ===========================');
  // eggRecipe.deleteVersionById(3);

  // console.log('save ingredients  ===========================');
  const version1 = eggRecipe.versions[0];
  version1.saveIngredients(eggIngredients);

  await UserService.update(user1);

  // eggRecipe.newVersion(2);

  // console.log(eggRecipe.versions);

  // below now works
  // console.log(await UserService.add(user1));
  // no await: returns a promise <pending>

  // TODO: problem seems to lie here
  // users.forEach((user) => UserService.add(user));

  // await UserService.add(user1);
  // await UserService.add(user2);
  // await UserService.add(user3);
  //
  // const loadedUsers = await UserService.findAll();
  // console.log(loadedUsers);

  // addRecipe
  // console.log('======================================');
  // console.log(recipe1.versions[0]);
  // user1.addRecipe(recipe1.title, recipe1.versions[0]);
  // console.log(user1.recipes);

  // const wtmb = new Meetup('Women Techmakers Berlin', 'Wayfair');
  // armagan.attend(wtmb);
  // mert.attend(wtmb);
  // wtmb.report();
  //
  // await PersonService.add(mert);
  // await PersonService.add(armagan);
  //
  // const people = await PersonService.findAll();
  //
  // console.log(people);
  //
  // await MeetupService.add(wtmb);
  //
  // const meetup = await MeetupService.find();
  //
  // meetup.report();
}

main();

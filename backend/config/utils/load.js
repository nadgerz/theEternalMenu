/* eslint-disable */

// const faker = require('faker');
// const mongoose = require('mongoose');
// const { Schema } = mongoose;
const RecipeModel = require('../../src/models/recipe');
const UserModel = require('../../src/models/user');

const log = console.log;

function randomBetween(min, max) {
  return ~~(Math.random() * (max - min)) + min;
}

const loadDummyData = async () => {
  let debug = false;
  // debug = true;

  try {
    await UserModel.deleteMany();
  } catch (err) {
    if (err.message !== 'ns not found') {
      console.error(err.message);

      process.exit(1);
    }
  }

  try {
    await RecipeModel.collection.drop();
  } catch (err) {
    if (err.message !== 'ns not found') {
      console.error(err.message);
      process.exit(1);
    }
  }

  const firstUser = {
    name: 'Antonia',
    email: 'tonia@mail.com',
    password: '1234567',
  };

  const onlyUser = await new UserModel(firstUser);

  await onlyUser
    .save()
    .then(rec => {
      if (debug) {
        console.log('Saved user', rec);
      }
    })
    .catch(err => console.error(err.message));

  // Promise.all([onlyUser]).then((user) => console.log(user));

  const recipe1 = {
    title: 'Eggs Benedict',
    img: 'eggsBenny.jpeg',
    versions: [
      {
        cookingTime: randomBetween(5, 120),
        servingSize: randomBetween(1, 12),

        directions: ['a string', 'is a string', 'is a string'],
        ingredients: ['a carrot', 'egg', 'another egg'],
        notes: ['a string', 'is a string', 'is a string'],
      },
    ],
  };

  const recipe2 = {
    title: 'Orange Miso Salmon Surpise!',
    img: 'orangeSalmon.jpeg',
    versions: [
      {
        cookingTime: randomBetween(5, 120),
        servingSize: randomBetween(1, 12),

        directions: ['a string', 'is a string', 'is a string'],
        ingredients: ['a carrot', 'egg', 'another egg'],
        notes: ['a string', 'is a string', 'is a string'],
      },
    ],
  };

  const recipe3 = {
    title: 'Red Beets Winter Salad',
    img: 'redBeetSalad.jpeg',
    versions: [
      {
        cookingTime: randomBetween(5, 120),
        servingSize: randomBetween(1, 12),

        directions: ['a string', 'is a string', 'is a string'],
        ingredients: ['a carrot', 'egg', 'another egg'],
        notes: ['a string', 'is a string', 'is a string'],
      },
    ],
  };

  const r1 = new RecipeModel(recipe1);
  const r2 = new RecipeModel(recipe2);
  const r3 = new RecipeModel(recipe3);

  // const recipes = [r1];
  const recipes = [r1, r2, r3];

  const promiseArr = recipes.map(async recipe => {
    try {
      await recipe.save();
      // .then(rec => onlyUser.recipes.push(rec));

      if (debug) {
        console.log('Saved', recipe);
      }
    } catch (err) {
      console.error(err.message);
    }
  });

  const whatever = recipes.map(async recipe => {
    try {
      await onlyUser.recipes.push(recipe);
    } catch (err) {
      console.error(err.message);
    }
  });

  await onlyUser.save();
  console.log(onlyUser);

  await Promise.all(whatever);
  Promise.all(promiseArr).then(() => console.log('Dummy data loaded...'));

  // Promise.all(promiseArr).then(() => {
  //   process.exit(0);
  //   console.log('Dummy data loaded...');
  // });
};

module.exports = loadDummyData;

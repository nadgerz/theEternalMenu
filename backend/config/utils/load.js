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
  debug = true;

  try {
    await UserModel.collection.drop();
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

  onlyUser
    .save()
    .then(rec => {
      if (debug) {
        console.log('Saved user', rec);
      }
    })
    .catch(err => console.error(err.message));

  // Promise.all([onlyUser]).then((user) => console.log(user));

  const recipe1 = {
    title: 'Eggs Benny',
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

  // const recipes = [recipe1, recipe2, recipe3];

  const r1 = new RecipeModel(recipe1);
  const r2 = new RecipeModel(recipe2);
  const r3 = new RecipeModel(recipe3);

  // recipes.forEach(recipe => {
  //   recipe
  //     .save()
  //     .then(rec => {
  //       if (debug) {
  //         console.log('Saved', rec);
  //       }
  //     })
  //     .catch(err => console.error(err.message));
  // });

  const p1 = r1
    .save()
    .then(rec => {
      if (debug) {
        console.log('Saved', rec);
      }
    })
    .catch(err => console.error(err.message));
  const p2 = r2
    .save()
    .then(rec => {
      if (debug) {
        console.log('Saved', rec);
      }
    })
    .catch(err => console.error(err.message));
  const p3 = r3
    .save()
    .then(rec => {
      if (debug) {
        console.log('Saved', rec);
      }
    })
    .catch(err => console.error(err.message));

  Promise.all([p1, p2, p3]).then(() => process.exit(0));
};

module.exports = loadDummyData;

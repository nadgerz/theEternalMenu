/* eslint-disable */
const faker = require('faker');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const log = console.log;

const connectDB = require('../../config/db');
connectDB();

function randomBetween(min, max) {
  return ~~(Math.random() * (max - min)) + min;
}

const RecipeSchema = Schema({
  title: String,
  servingSize: Number,
  cookingTime: Number,
  image: String,
});

const Recipe = mongoose.model('recipe', RecipeSchema);
// console.log(Recipe);

Recipe.collection.drop();

let debug;
debug = true;
debug = false;

const MAX_PROMISES = 100;

let promises = [];

for (let i = 0; i < MAX_PROMISES; i++) {
  const recipe = {
    title: faker.random.words(),
    cookingTime: randomBetween(5, 120),
    servingSize: randomBetween(1, 12),
    image: faker.image.food(),
  };
  const r = new Recipe(recipe);
  const p = r
    .save()
    .then(rec => {
      if (debug) {
        console.log('Saved', rec);
      }
    })
    .catch(err => console.error(err.message));

  promises.push(p);
}

const recipe1 = {
  title: 'Eggs Benny',
  cookingTime: 23,
  servingSize: 2,
};

const recipe2 = {
  title: 'Salmon Surpise',
  cookingTime: 45,
  servingSize: 4,
};

const recipe3 = {
  title: 'Toast',
  cookingTime: 7,
  servingSize: 8,
};

const r1 = new Recipe(recipe1);
const r2 = new Recipe(recipe2);
const r3 = new Recipe(recipe3);
// console.log(r1)

/*
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
*/

Promise.all(promises).then(() => process.exit(0));

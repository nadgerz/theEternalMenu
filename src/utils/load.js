/* eslint-disable */
const mongoose = require('mongoose');
const { Schema } = mongoose;

const log = console.log;

const connectDB = require('../../config/db');
connectDB();

const RecipeSchema = Schema({
  title: {
    type: String,
  },
  servingSize: Number,
  cookingTime: Number,
});

const Recipe = mongoose.model('recipe', RecipeSchema);
// console.log(Recipe);

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

Recipe.collection.drop();

const p1 = r1
  .save()
  .then(rec => console.log('Saved', rec))
  .catch(err => console.error(err.message));
const p2 = r2
  .save()
  .then(rec => console.log('Saved', rec))
  .catch(err => console.error(err.message));
const p3 = r3
  .save()
  .then(rec => console.log('Saved', rec))
  .catch(err => console.error(err.message));

Promise.all([p1, p2, p3]).then(() => process.exit(0));

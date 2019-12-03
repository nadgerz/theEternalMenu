/* eslint-disable */
const mongoose = require('mongoose');

const Recipe = require('./src/models/recipe');
console.log(Recipe);

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

r1.save()
  .then(() => console.log('Saved'))
  .catch(err => console.error(err.message));
r2.save();
r3.save();

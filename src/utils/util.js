/* eslint-disable */
require('core-js/stable');
require('regenerator-runtime/runtime');

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

const RecipeModel = mongoose.model('recipe', RecipeSchema);
console.log(RecipeModel);

const Recipe = RecipeModel;

/*
const minPromise = Recipe.find({})
  .sort({ cookingTime: 1 })
  .limit(1)
  .then(data => data[0].cookingTime);

const maxPromise = Recipe.find({})
  .sort({ cookingTime: -1 })
  .limit(1)
  .then(data => data[0].cookingTime);
*/

const Order = {
  ASC: 1,
  DESC: -1,
};

Object.freeze(Order);

const query = (model, key, order = Order.ASC) => {
  return model
    .find({})
    .sort({ [key]: order })
    .limit(1)
    .then(data => data[0][key]);
};

// 1: Promise.all([minPromise, maxPromise]).then(stuff => console.log(stuff));
// 2: Promise.all([query(1), query(-1)]).then(stuff => console.log(stuff));

/*
Promise.all([query(Order.ASC), query(Order.DESC)]).then(stuff =>
  console.log(stuff),
);
*/

let model;
model = Recipe;

let field;
field = 'servingSize';
field = 'cookingTime';

let minMax;
minMax = Promise.all([
  query(model, field),
  query(model, field, Order.DESC),
]).then(stuff => {
  return {
    min: stuff[0],
    max: stuff[1],
  };
});
minMax.then(results => console.log(results));

minMax = Promise.all([
  query(model, field),
  query(model, field, Order.DESC),
]).then(records => {
  const [min, max] = records;

  return {
    min,
    max,
  };
});
minMax.then(results => console.log(results));

const getMinMax = async (model, field) => {
  const min = await query(model, field, Order.ASC);
  const max = await query(model, field, Order.DESC);

  return {
    min,
    max,
  };
};

getMinMax(model, field).then(res => {
  console.log(res);
  process.exit(0);
});

module.exports = getMinMax;

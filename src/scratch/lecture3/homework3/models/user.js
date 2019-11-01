const uuidv1 = require('uuid/v1');
const Recipe = require('./recipe');

module.exports = class User {
  constructor(name, email, password, id, recipes = []) {
    this.name = name;
    // TODO: discuss this code with Steve
    this.id = id || `${name.replace(' ', '').toLowerCase()}-${uuidv1()}`;
    this.email = email;
    this.password = password;

    this.recipes = recipes;
  }


  static create({ name, email, password, id, recipes }) {
    const user = new User(name, email, password, id);

    user.recipes = recipes.map(recipe => Recipe.create(recipe));

    return user;
  }
};
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

  // static create({ name, age, meetups, id }) {
  //   return new Person(name, age, meetups, id);
  // }

  static create({ name, email, password, id, recipes }) {
    return new User(name, email, password, id, recipes);
  }

};
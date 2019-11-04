// import validator from 'validator';
import isEmail from 'validator/lib/isEmail';

const BaseService = require('./base-service');
const UserModel = require('../models/user');

class UserService extends BaseService {
  constructor() {
    super(UserModel, `${__dirname}/../user-database.json`);
  }

  async add(person) {
    if (!isEmail(person.email)) {
      return null;
    }
    return await super.add(person);
  }
}

module.exports = new UserService();
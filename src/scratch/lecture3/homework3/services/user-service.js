const BaseService = require('./base-service');
const UserModel = require('../models/recipe');

class UserService extends BaseService {
  constructor() {
    super(UserModel, `${__dirname}/../meetup-database.json`);
  }
}

module.exports = new UserService();
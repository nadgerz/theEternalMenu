const User = class {
  constructor(name, email, password) {
    this.id = `user-${name.replace(' ', '').toLowerCase()}`; // TODO: UUID

    this.name = name;
    this.email = email;

    // TODO actually we will never store the password... we use a login
    //      for the user to authenticate *with* a password
    //      Perhaps the user has a 'loggedIn' boolean field?
    this._password = password;

    this.recipes = [];
  }

  addRecipe(newRecipe) {
    // TODO: check recipe name - NO DUPLICATES
    this.recipes.push(newRecipe);
  }

  updateRecipe(editedRecipe) {
    let index = this.recipes.indexOf(editedRecipe);
    this.recipes.splice(index, 1, editedRecipe);
  }

  deleteRecipe(toDelete) {
    let index = this.recipes.indexOf(toDelete);
    this.recipes.splice(index, 1);
  }

  setEmail(newEmail) {
    this.email = newEmail;
  }

  setUserName(newName) {
    this.name = newName;
  }

  setPassword(newPassword) {
    this.password = newPassword;
  }
};

module.exports = User;

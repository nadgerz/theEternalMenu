const User = class {
  constructor(name, email, password) {
    this.name = name;
    this.id = `user-${name.replace(' ', '').toLowerCase()}`; // TODO: UUID
    this.email = email;
    this.password = password;

    this.recipes = [];
  }

  addRecipe(newRecipe) {
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

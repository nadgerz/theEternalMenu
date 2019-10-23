const users = [];

const User = class {
  constructor( name, email, password ) {
    this.name = name;
    this.id = `user-${name.replace( ' ', '' ).toLowerCase()}`; // TODO: UUID
    this.email = email;
    this.password = password;
    
    this.recipes = [];
  }
  
  addRecipe( newRecipe ) {
    this.recipes.push( newRecipe );
  }
  
  updateRecipe( editedRecipe ) {
    let index = this.recipes.indexOf( editedRecipe );
    this.recipes.splice( index, 1, editedRecipe );
  }
  
  deleteRecipe( toDelete ) {
    let index = this.recipes.indexOf( toDelete );
    this.recipes.splice( index, 1 );
  }
  
  setEmail( newEmail ) {
    this.email = newEmail;
  }
  
  setUserName( newName ) {
    this.name = newName;
  }
  
  setPassword( newPassword ) {
    this.password = newPassword;
  }
};

const Recipe = class {
  constructor( title, instructions, notes ) {
    this.title = title;
    this.cookingTime = 0;
    this.ingredients = [];
    this.instructions = instructions;
    this.notes = notes;
    
    // this.version = 1;
  }
  
  addIngredient( amount, unit, name ) {
    this.ingredients.push( new Ingredient( amount, unit, name ) );
  }
  
  setCookingTime( time ) {
    this.cookingTime = time;
  }
  
  deleteIngredient( toDelete ) {
  
  }
  
};

const Ingredient = class {
  constructor( amount, unit, name ) {
    this.amount = amount;
    this.unit = unit;
    this.name = name;
  }
};


let user1 = new User( 'Anton', 'Anton@mail.com', '1234' );
let user2 = new User( 'Berta', 'Berta@mail.com', 'qwerty' );
let user3 = new User( 'Chris', 'Chris@mail.com', 'qwertz' );

console.log( user1, user2, user3 );

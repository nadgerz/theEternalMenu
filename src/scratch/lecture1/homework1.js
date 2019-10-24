const users = [];
const mockRecipes = require( './recipes');


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
  constructor( title,
               cookingTime  = 0,
               servingSize  = 0,
               ingredients  = [],
               instructions = [],
               notes        = [],
               tags         = []
  ) {
    this.title = title;
    this.cookingTime = cookingTime;
    this.servingSize = servingSize;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.notes = notes;
    this.tags = tags;
    
    // this.version = 1;
  }
  
  addIngredient( amount, unit, name, sub ) {
    this.ingredients.push( new Ingredient( amount, unit, name, sub ) );
  }
  
  deleteIngredient( toDelete ) {
    let index = this.ingredients.indexOf( toDelete );
    this.ingredients.splice( index, 1 );
  }
  
  setCookingTime( time ) {
    this.cookingTime = time;
  }
  
  addInstructions( instructions ) {
    this.instructions = instructions;
  }
  
  addNotes( note ) {
    this.notes = note;
  }
};

const Ingredient = class {
  constructor( amount = 0.0, unit = '', name, sub = [] ) {
    this.amount = amount;
    this.unit = unit;
    this.name = name;
    this.sub = sub;
  }
};

let user1 = new User( 'Antonia', 'Antonia@mail.com', '1234' );
let user2 = new User( 'Berta', 'Berta@mail.com', 'qwerty' );
let user3 = new User( 'Chris', 'Chris@mail.com', 'qwertz' );

// console.log( user1, user2, user3 );

let recipe1 = new Recipe( mockRecipes[1].title,
                          mockRecipes[1].cookingTime,
                          mockRecipes[1].servingSize,
                          mockRecipes[1].ingredients,
                          mockRecipes[1].instructions,
                          mockRecipes[1].notes,
                          mockRecipes[1].tags);

console.log( recipe1 );

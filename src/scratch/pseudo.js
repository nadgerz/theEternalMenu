const users = [];

const User = class {
  constructor( name, email, password ) {
    this.name = name;
    this.id = `user-${name.replace( ' ', '' ).toLowerCase()}`; // TODO: UUID
    this.email = email;
    this.password = password;
    
    this.recipes = [];
  }
  
};

const Recipe = class {
  constructor( title, cookingTime, ingredients, instructions, notes ) {
    this.title = title;
    this.cookingTime = cookingTime;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.notes = notes;
    
    // this.version = 1;
  }
};

const Ingredient = class {
  constructor( amount, unit, name ) {
    this.amount = amount;
    this.unit = unit;
    this.name = name;
  }
};
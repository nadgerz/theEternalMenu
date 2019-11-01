const Ingredient = class {
  constructor({ amount = 0.0, unit = '', name, sub = [] }, id) {
    this.id = id;
    this.amount = amount;
    this.unit = unit;
    this.name = name;
    this.sub = sub;
  }

  static create({ amount, unit, name, sub, id }) {
    return new Ingredient({ amount, unit, name, sub }, id);
  }
};

module.exports = Ingredient;

const uuidv1 = require('uuid/v1');
const Version = require('./version');

module.exports = class Recipe {
  constructor( title, id, dateCreated, versions = []) {
    this.title = title;
    // TODO: fix below
    // this.versions = details.map(versionDetails => new Version(versionDetails, versionDetails.id));
    // this.versions = versions.map(version => (new Version(version, this.versions.length + 1)));
    this.versions = versions;

    // const allItems =  findAll();
    // const lastItem = allItems[allItems.length - 1];
    // const lastItemsId = lastItem && lastItem.id || 0;
    // item.id = lastItemsId + 1;

    this.id = id || `${this.title.replace(' ', '').toLowerCase()}-${uuidv1()}`;

    this.dateCreated = dateCreated || new Date;

    // TODO: limit versions array to... 15?
    // this.images = [] // TODO: implement an images array
  }

  static create({ title, id, dateCreated, versions }) {
    const recipe = new Recipe(title, id, dateCreated);

    recipe.versions = versions.map(version => Version.create(version));

    return recipe;
  }
};


//
// module.exports = class Meetup {
//   constructor(name, location, attendees = [], id) {
//     this.name = name;
//     this.location = location;
//     this.attendees = attendees;
//     this.id = id;
//   }
//
//   report() {
//     console.log(
//       chalk.blue.bgRed.bold(this.name),
//       'meetup is held at',
//       chalk.green(this.location),
//       'and number of attendees are',
//       this.attendees.length,
//     );
//   }
//
//   static create({ name, location, attendees, id }) {
//     return new Meetup(name, location, attendees, id);
//   }
// };
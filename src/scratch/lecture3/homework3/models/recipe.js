const uuidv1 = require('uuid/v1');
const Version = require('./version');

module.exports = class Recipe {
  constructor(title, details = [], id, dateCreated) {
    this.title = title;
    this.versions = details.map(versionDetails => new Version(versionDetails, versionDetails.id));
    // this.versions = [];
    // this.versions.push(new RecipeVersion(details, this.versions.length + 1));


    // TODO: discuss
    this.id = id || `${this.title.replace(' ', '').toLowerCase()}-${uuidv1()}`;

    // TODO: discuss
    this.dateCreated = dateCreated || new Date;
    // TODO: limit versions array to... 15?
    // this.images = [] // TODO: implement an images array
  }

  static create({ title, details, id, dateCreated }) {
    return new Recipe(title, details, id, dateCreated);
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
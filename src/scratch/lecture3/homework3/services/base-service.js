const fs = require('fs');
const Flatted = require('flatted/cjs');

module.exports = class Service {
  constructor(model, dbPath) {
    this.model = model;
    this.dbPath = dbPath;
  }


  async findAll() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.dbPath, 'utf8', async (err, file) => {
        if (err) {
          if (err.code === 'ENOENT') {
            // TODO: dont understand this part very well
            await this.saveAll([]);
            return resolve([]);
          }

          return reject(err);
        }

        const items = Flatted.parse(file).map(this.model.create);

        resolve(items);
      });
    });
  }

  async add(item) {
    const allItems = await this.findAll();
    // console.log('ADD ================');
    // console.log(allItems);
    // console.log(item);
    // const lastItem = allItems[allItems.length - 1];
    // const lastItemsId = lastItem && lastItem.id || 0;
    // item.id = lastItemsId + 1;

    allItems.push(item);
    // console.log(allItems);


    await this.saveAll(allItems);

    // common practice to return the added item
    return item;
  }

  async delete(itemId) {
    const allItems = await this.findAll();
    const itemIndex = allItems.findIndex(item => item.id === itemId);
    if (itemIndex < 0) return;

    allItems.splice(itemIndex, 1);

    await this.saveAll(allItems);
  }

  async find(itemId) {
    const allItems = await this.findAll();

    return allItems.find(item => item.id === itemId);
  }

  async saveAll(items) {
    return new Promise((resolve, reject) => {
      // console.log('SAVE ALL =================');
      // console.log(JSON.stringify(items, null, 2));
      // console.log(items);

      // TODO: Flatted produced weird results that couldn't be reaad back in again...
      fs.writeFile(this.dbPath, Flatted.stringify(items, null, 2), (err) => {
        if (err) return reject(err);

        // TODO: what happened to 'file' *used after 'err"?
        resolve(items);
      });
    });
  }
};

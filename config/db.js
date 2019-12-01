const mongoose = require('mongoose');
const Chalk = require('chalk');
const config = require('config');
process.env['NODE_CONFIG_DIR'] = __dirname;

const mongoURI = 'mongoURI';

if (!config.has(mongoURI)) {
  console.error(
    Chalk.bgRedBright.bold(
      `Please add a ${Chalk.inverse(mongoURI)} key to the default.json file.`,
    ),
  );
  // Exit process with failure
  process.exit(1);
}
const dbUrl = config.get(mongoURI);

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB Connected to ${dbUrl}`);
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;

/* eslint-disable */
const express = require('express');
const connectDB = require('./config/db');
// const HttpStatus = require('http-status-codes');

const app = express();

// connect to DB
connectDB();

// Init Middleware
// app.set('view engine', 'pug');
// used instead of body-parser
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

// will render the index.html file if nothing else is specified
app.use(express.static(__dirname + 'public'));

// Registering the custom routes
app.use('/user', require('./src/routes/user'));
app.use('/recipe', require('./src/routes/recipe'));

// Handler for any error
// app.use((req, res, next) => {
//   switch (req.url) {
//     case '/bibble':
//       res.status(HttpStatus.IM_A_TEAPOT).send(HttpStatus.getStatusText(418));
//       break;
//
//     default:
//       res
//         .status(HttpStatus.NOT_FOUND)
//         .render(HttpStatus.getStatusCode('Not Found') + '');
//   }
// next();
// });

// Start up the server on a customer port, if required.
const DEFAULT_PORT = 3000;
const PORT = process.env.PORT || DEFAULT_PORT;

app.listen(PORT, () => {
  console.info(
    `server has started on port ${
      PORT === DEFAULT_PORT ? PORT : Chalk.bgYellowBright(PORT)
    }`,
  );
});

// module.exports = app;

const bodyParser = require('body-parser');

const jwtControllers = require('../api/controllers');

const { jwtAuthenticate } = require('../api/middlewares/authentication');

const API_VERSION = process.env.API_VERSION;

const bodyParserJson = bodyParser.json({
  limit: '5mb',
});
const bodyParserUrl = bodyParser.urlencoded({
  limit: '5mb',
  extended: true,
  parameterLimit: 50000,
});


const jwtRoutes = [jwtControllers];
const generateJwtRoutes = app =>
  app.use(`/${API_VERSION}`, bodyParserUrl, bodyParserJson, jwtAuthenticate, jwtRoutes);

exports.generateAPIRoutes = (app) => {
  generateJwtRoutes(app);
};

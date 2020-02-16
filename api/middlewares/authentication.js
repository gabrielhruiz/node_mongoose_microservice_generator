const jwt = require('jsonwebtoken');

const { JWT_SECRET, AUTH_CODE } = require('../../config/environment');
const errorSystem = require('../Error');

exports.jwtAuthenticate = (req, res, next) => {
  try {
    const options = { clockTolerance: 60 };
    const accessToken = req.headers.authorization.replace(/^Bearer\s/, '');
    const decoded = jwt.verify(accessToken, JWT_SECRET, options);
    const { userId, role, code } = decoded;
    if (!userId || !role || code !== AUTH_CODE) {
      const error = { message: 'Invalid access token', accessToken };
      return errorSystem.manageError({ code: 401, error, req, res });
    }
    req.payload = { user: userId, role };
    return next();
  } catch (error) {
    return errorSystem.manageError({ code: 401, error, req, res });
  }
};

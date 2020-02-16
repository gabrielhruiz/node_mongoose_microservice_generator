const logger = require('../config/logger');

const resolveLogs = (req, error) => {
  const stringError = error && error instanceof Object ? JSON.stringify(error) : error.toString();
  const headError = req ? `${req.method} ${req.originalUrl}` : '[ERROR]';
  logger.error(`${headError}: ${stringError}`);
};

exports.manageError = (data) => {
  const { code = 500, error, req, res, log = true } = data;
  if (log) {
    resolveLogs(req, error);
  }
  if (res) {
    return res.status(code).json(error);
  }
  return error;
};

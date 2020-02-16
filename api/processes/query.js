const Service = require('../services');

const stringUtil = require('../utils/string');

exports.getQuery = (query, modelName, method) => {
  try {
    const folderName = stringUtil.toModelName(modelName);
    const Model = require(`../models/${folderName}`);
    const modelQuery = new Service(Model);
    return modelQuery[method](query);
  } catch (error) {
    throw error;
  }
};

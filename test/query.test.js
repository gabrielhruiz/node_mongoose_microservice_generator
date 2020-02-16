const chai = require('chai');
const mongoose = require('mongoose');

const queryProcess = require('../api/processes/query');

const { MONGO_URI } = require('../config/environment');

const query = {};
const modleName = 'User';
const method = 'getDocument';

const expect = chai.expect;

before((done) => {
  mongoose.connect(MONGO_URI, { useNewUrlParser: true });
  done();
});

beforeEach((done) => {
  done();
});

after((done) => {
  mongoose.connection.close();
  done();
});

afterEach((done) => {
  done();
});

describe('Query process', () => {
  describe('getQuery', () => {
    it('it should generate a user model', () => {
      return queryProcess.getQuery(query, modleName, method)
        .then((result) => {
          expect(result).to.be.a('object');
          const user = result.toObject();
          expect(user).to.have.property('_id');
          expect(user).to.have.property('profile');
        });
    });
  });
});

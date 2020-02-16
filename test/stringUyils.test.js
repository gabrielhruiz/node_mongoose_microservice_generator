const chai = require('chai');

const stringUtils = require('../api/utils/string');

const expect = chai.expect;

describe('String utils', () => {
  it('it should generate a camel case string', () => {
    const result = stringUtils.toCamelCase('camel case example');
    expect(result).to.be.a('string');
    expect(result).to.be.equal('camelCaseExample');
  });
  it('it should generate a class name string', () => {
    const result = stringUtils.toModelName('class name example');
    expect(result).to.be.a('string');
    expect(result).to.be.equal('ClassNameExample');
  });
});

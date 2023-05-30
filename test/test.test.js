const { expect } = require('chai');

describe('it', () => {
  it('should', () => {
    expect(process.env.API_URL).to.be.eq('https://reqres.in/api/');
  });
});

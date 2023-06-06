const proxyquire = require('proxyquire');
const sinon = require('sinon');

describe('reqResConnector', () => {
  let axiosStub;
  let connector;

  beforeEach(() => {
    axiosStub = sinon.stub().resolves({
      status: 200,
      up: true,
    });
    connector = proxyquire('../../../src/lib/connectors/reqResConnector', {
      axios: axiosStub,
    });
  });

  it('should call axios', () => {
    connector.reqResConnector();

    sinon.assert.called(axiosStub);
  });
});

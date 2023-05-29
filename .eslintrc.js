// eslint--igno
const dwpConfig = require('@dwp/eslint-config-base');

dwpConfig.env.mocha = true;
dwpConfig.rules['import/no-extraneous-dependencies'] = 'off';

module.exports = dwpConfig;

const { join } = require("node:path");

module.exports = {
  extends: require("eslint-config-custom/next"),
  parserOptions: {
    project: join(__dirname, "tsconfig.json"),
  },
};

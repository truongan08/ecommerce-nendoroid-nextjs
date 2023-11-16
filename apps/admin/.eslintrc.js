const { join } = require("node:path");

module.exports = {
  extends: require("eslint-config-custom/next"),
  rules: {
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
  },
  parserOptions: {
    project: join(__dirname, "tsconfig.json"),
  },
};

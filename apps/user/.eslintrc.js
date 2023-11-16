const { join } = require("node:path");

module.exports = {
  extends: "next/core-web-vitals",
  parserOptions: {
    project: join(__dirname, "tsconfig.json"),
  },
};

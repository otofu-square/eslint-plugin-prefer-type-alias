import { preferTypeAlias } from "./prefer-type-alias";

const rules = {
  "prefer-type-alias": preferTypeAlias
};

module.exports = {
  rules,
  configs: {
    recommended: {
      plugins: ["prefer-type-alias"],
      rules: {
        "prefer-type-alias/prefer-type-alias": "error"
      }
    }
  }
};

module.exports = {
  "extends": [
    "airbnb",
  ],
  "plugins": ["prettier"],
  "env": {
    "browser": true,
    "jest": true
  },
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "prettier/prettier": "error",
    "arrow-parens": "as-needed",
  }
};
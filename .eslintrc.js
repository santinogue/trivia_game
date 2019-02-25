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
    "arrow-parens": ["error", "as-needed"],
    "implicit-arrow-linebreak": 0,
    "import/prefer-default-export": 0,
    "react/prefer-stateless-function": 0,
  }
};
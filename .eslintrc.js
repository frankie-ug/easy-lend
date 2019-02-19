module.exports = {
  'env': {
    'browser': true,
    'jest': true,
    'es6': true,
    'node': true,
  },
  'extends': [
    'airbnb',
    'prettier',
  ],
  'plugins': [
    'prettier',
  ],
  'rules': {
    'prettier/prettier': ['error', {
      'singleQuote': true,
      'trailingComma': 'es5'
    }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/prefer-default-export": ["warn"],
    "jsx-a11y/label-has-associated-control": ["warn"],
    "jsx-a11y/label-has-for": ["warn"]
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    }
  }
}
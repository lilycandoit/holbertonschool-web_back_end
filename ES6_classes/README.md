### SETUP FOR ES6-CLASSES:

📄 `package.json`

```json
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/preset-env": "^7.6.0",
    "@babel/node": "^7.8.0",
    "eslint": "^6.8.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
```

---

### 📄 `babel.config.js`

Put this file in your project root:

```js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

This tells Babel to compile modern ES6+ code for the Node.js version you’re using.

---

### 📄 `.eslintrc.json`

Optional (for linting rules):

```js
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
```

---

### 🚀 Setup steps

1. Create a new folder:

   ```bash
   mkdir ES6_classes && cd ES6_classes
   ```

2. Save the above files (`package.json`, `babel.config.js`, `.eslintrc.json`) in the root.

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run your code:

   ```bash
   npm run dev
   ```

5. Run tests:

   ```bash
   npm test
   ```

---

✅ After this, you’ll have:

```
ES6_classes/
  node_modules/
  package.json
  package-lock.json
  babel.config.js
  .eslintrc.json
```

# Strip HTML Tags

[![Build Status](https://travis-ci.org/remylagerweij/strip-html-tags.svg?branch=master)](https://travis-ci.org/remylagerweij/strip-html-tags) [![dependencies Status](https://david-dm.org/remylagerweij/strip-html-tags/status.svg)](https://david-dm.org/remylagerweij/strip-html-tags) [![devDependencies Status](https://david-dm.org/remylagerweij/strip-html-tags/dev-status.svg)](https://david-dm.org/remylagerweij/strip-html-tags?type=dev) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Strips HTML tags from strings

# Installation
## Yarn or NPM
`yarn add @lagerweijtech/strip-html-tags`
`npm add @lagerweijtech/strip-html-tags

# Usage

1. Import stripHtmlTags in your .js file
`@import stripHtmlTags`
2. running `stripHtmlTags('<div class="hello">strip me</div>')` will return `'strip me'`

# Commands
- `npm run clean` - Remove `lib/` directory
- `npm test` - Run tests with linting and coverage results.
- `npm test:only` - Run tests without linting or coverage.
- `npm test:watch` - You can even re-run tests on file changes!
- `npm test:prod` - Run tests with minified code.
- `npm run test:examples` - Test written examples on pure JS for better understanding module usage.
- `npm run lint` - Run ESlint with airbnb-config
- `npm run cover` - Get coverage report for your code.
- `npm run build` - Babel will transpile ES6 => ES5 and minify the code.
- `npm run prepublish` - Hook for npm. Do all the checks before publishing your module.

# License
MIT © Lagerweij Tech

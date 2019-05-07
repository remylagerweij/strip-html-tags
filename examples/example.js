/* eslint-disable no-console */
const stripHtmlTags = require('../lib').default;

const strippedHtml = stripHtmlTags('<section>I <span class="hello">should</span> be <b>stripped</b></section>');

// strippedHtml === 'I should be stripped'
console.log(strippedHtml);

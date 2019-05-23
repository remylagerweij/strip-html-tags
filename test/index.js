import { assert } from 'chai';
import stripHtmlTags from '../src';

describe('Awesome test.', () => {
  it('should return an empty string when input is not a string', () => {
    assert(stripHtmlTags(null) === '');
    assert(stripHtmlTags({}) === '');
    assert(stripHtmlTags([]) === '');
    assert(stripHtmlTags(undefined) === '');
    assert(stripHtmlTags(123) === '');
  });

  it('should strip HTML tags from string', () => {
    const expectedVal = 'I should be stripped';
    assert(
      stripHtmlTags('<section>I <span class="hello">should</span> be <b>stripped</b></section>') === expectedVal, 'String with HTML could not be stripped correctly :('
    );
  });
});

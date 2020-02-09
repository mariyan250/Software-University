const assert = require('chai').assert;

describe('Test', () => {

    it('check the type of input - Boolean', () => {
        let result = isOddOrEven(false);
        assert.equal(result, undefined);
    });

    it('check the string - even case', () => {
        let result = isOddOrEven('testingg');
        assert.equal(result, 'even');
    });

    it('check the string - odd case', () => {
        let result = isOddOrEven('testing');
        assert.equal(result, 'odd');
    });
});
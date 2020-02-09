const assert = require('chai').assert;

function isOddOrEven(string) {
    if (typeof (string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe('Test', () => {

    it('check the type of input - Boolean', () => {
        let result = isOddOrEven(false);
        assert.equal(result, undefined, 'The result is not undefined');
    });

    it('check the string - even case', () => {
        let result = isOddOrEven('testingg');
        assert.equal(result, 'even', 'the result should be even..');
    });

    it('check the string - odd case', () => {
        let result = isOddOrEven('testing');
        assert.equal(result, 'odd', 'the result should be odd..');
    });
});
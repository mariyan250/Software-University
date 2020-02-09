const assert = require('chai').assert;

function lookupChar(string, index) {
    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe('Testing..', () => {
    it('wrong inputs', () => {
        let result = lookupChar(120, 20);
        assert.equal(result, undefined, 'wrong input');
    });

    it('wrong inputs', () => {
        let result = lookupChar('mariyan', 'mariyan');
        assert.equal(result, undefined, 'wrong input');
    });

    it('index is equal to string length', () => {
        let result = lookupChar('mariyan', 7);
        assert.equal(result, 'Incorrect index', 'error');
    });

    it('index is equal to string length', () => {
        let result = lookupChar('mariyan', 7.2);
        assert.equal(result, undefined, 'error');
    });

    it('index is bigger than string length', () => {
        let result = lookupChar('mariyan', 10);
        assert.equal(result, 'Incorrect index', 'error');
    });

    it('index is negative', () => {
        let result = lookupChar('mariyan', -1);
        assert.equal(result, 'Incorrect index', 'error');
    });

    it('return true string', () => {
        let result = lookupChar('mariyan', 3);
        assert.equal(result, 'i', 'not returning the right string');
    });
});
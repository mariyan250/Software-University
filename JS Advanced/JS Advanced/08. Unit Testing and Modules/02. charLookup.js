const assert = require('chai').assert;

describe('Test', () => {
    it('wrong inputs', () => {
        let result = lookupChar(120, 20);
        assert.equal(result, undefined);
    });

    it('wrong inputs', () => {
        let result = lookupChar('mariyan', 'mariyan');
        assert.equal(result, undefined);
    });

    it('index is equal to string length', () => {
        let result = lookupChar('mariyan', 7);
        assert.equal(result, 'Incorrect index');
    });

    it('index is equal to string length', () => {
        let result = lookupChar('mariyan', 7.2);
        assert.equal(result, undefined);
    });

    it('index is bigger than string length', () => {
        let result = lookupChar('mariyan', 10);
        assert.equal(result, 'Incorrect index');
    });

    it('index is negative', () => {
        let result = lookupChar('mariyan', -1);
        assert.equal(result, 'Incorrect index');
    });

    it('return true string', () => {
        let result = lookupChar('mariyan', 3);
        assert.equal(result, 'i');
    });
});
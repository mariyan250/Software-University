const assert = require('chai').assert;

describe('Test', () => {
    let result;
    let output;

    beforeEach(() => {
        result = null;
        output = null
    })

    describe('Testing constructor', () => {
        it('test', () => {
            result = new PaymentPackage('string', 5)
            assert.equal(result.name, 'string')
            assert.equal(result.value, 5)
        })
    });

    describe('Testing name()', () => {
        it('test', () => {
            result = () => new PaymentPackage(5, 5)
            assert.throw(result, 'Name must be a non-empty string')
        })
        it('test', () => {
            result = () => new PaymentPackage('', 5)
            assert.throw(result, 'Name must be a non-empty string')
        })
    });

    describe('Testing value()', () => {
        it('test', () => {
            result = () => new PaymentPackage('string', -5)
            assert.throw(result, 'Value must be a non-negative number')
        })
        it('test', () => {
            result = () => new PaymentPackage('string', 'string')
            assert.throw(result, 'Value must be a non-negative number')
        })
    });

    describe('Testing VAT()', () => {
        it('test11', () => {
            result = () => new PaymentPackage('string', 10).VAT = 'str'
            assert.throw(result, 'VAT must be a non-negative number')
        })
        it('test', () => {
            result = () => new PaymentPackage('string', 10).VAT = -2
            assert.throw(result, 'VAT must be a non-negative number')
        })
        it('test', () => {
            result = new PaymentPackage('a', 1)
            output = result.VAT;
            assert.deepEqual(output, 20)
        })
    });

    describe('Testing active()', () => {
        it('test', () => {
            result = () => new PaymentPackage('string', 10).active = 'Boolean'
            assert.throw(result, 'Active status must be a boolean')
        })
        it('test', () => {
            result = new PaymentPackage('a', 1)
            output = result.active;
            assert.deepEqual(output, true)
        })
    });
    describe('Testing toString()', () => {
        it('test', () => {
            result = new PaymentPackage('HR Services', 1500)
            result = result.toString();
            output = [
                `Package: HR Services`,
                `- Value (excl. VAT): 1500`,
                `- Value (VAT 20%): 1800`
            ];
            assert.equal(result, output.join('\n'))
        })
        it('test', () => {
            result = new PaymentPackage('HR Services', 1500)
            result._active = false;
            result = result.toString();
            output = [
                `Package: HR Services (inactive)`,
                `- Value (excl. VAT): 1500`,
                `- Value (VAT 20%): 1800`
            ];
            assert.equal(result, output.join('\n'))
        })
        it('test', () => {
            result = new PaymentPackage('HR Services', 0)
            result._VAT = 0;
            result = result.toString();
            output = [
                `Package: HR Services`,
                `- Value (excl. VAT): 0`,
                `- Value (VAT 0%): 0`
            ];
            assert.equal(result, output.join('\n'))
        })
    });
});
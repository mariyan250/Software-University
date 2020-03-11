const assert = require('chai').assert;

describe('Test', () => {
    describe('addFive()', () => {
        it('parameter is not a Number', () => {
            let result = mathEnforcer.addFive('wtf');
            assert.equal(result, undefined, 'parameter is number');
        });

        it('parameter is not a Number', () => {
            let result = mathEnforcer.addFive(20);
            assert.equal(result, 25, '+ 5 no works..');
        });

        it('parameter is not a Number', () => {
            let result = mathEnforcer.addFive(-5);
            assert.equal(result, 0, '+ 5 no works..');
        });

        it('parameter is not a Number', () => {
            let result = mathEnforcer.addFive(20.5);
            assert.equal(result, 25.5, '+ 5 no works..');
        });
    });

    describe('subtractTen()', () => {
        it('parameter is not a Number', () => {
            let result = mathEnforcer.subtractTen('20');
            assert.equal(result, undefined, 'parameter is number');
        });

        it('parameter is not a Number', () => {
            let result = mathEnforcer.subtractTen(20);
            assert.equal(result, 10, '- 10 no works..');
        });

        it('parameter is not a Number', () => {
            let result = mathEnforcer.subtractTen(-10);
            assert.equal(result, -20, '- 10 no works..');
        });

        it('parameter is not a Number', () => {
            let result = mathEnforcer.subtractTen(11.5);
            assert.equal(result, 1.5, '- 10 no works..');
        });
    });

    describe('sum()', () => {
        it('parameter is not a Number', () => {
            let result = mathEnforcer.sum('20', 20);
            assert.equal(result, undefined, 'parameter is tnumber');
        });

        it('parameter is not a Number', () => {
            let result = mathEnforcer.sum(20, '20');
            assert.equal(result, undefined, 'parameter is tnumber');
        });

        it('parameter is not a Number', () => {
            let result = mathEnforcer.sum(20, 20);
            assert.equal(result, 40, '20 + 20 no works..');
        });

        it('parameter is not a Number', () => {
            let result = mathEnforcer.sum(-10, 20);
            assert.equal(result, 10, '20 + 20 no works..');
        });

        it('parameter is not a Number', () => {
            let result = mathEnforcer.sum(-10, -10);
            assert.equal(result, -20, '20 + 20 no works..');
        });

        it('parameter is not a Number', () => {
            let result = mathEnforcer.sum(20, 20.2);
            assert.equal(result, 40.2, '20 + 20 no works..');
        });

        it('parameter is not a Number', () => {
            let result = mathEnforcer.sum(20.6, 20.2);
            assert.equal(result, 40.8, '20 + 20 no works..');
        });

        it('parameter is not a Number', () => {
            let result = mathEnforcer.sum(20.6, 20);
            assert.equal(result, 40.6, '20 + 20 no works..');
        });
    });
});
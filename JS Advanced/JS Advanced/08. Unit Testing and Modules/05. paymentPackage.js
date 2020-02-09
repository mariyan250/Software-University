describe('Test', () => {
    describe('Testing prepend()', () => {
        it('if have string passed', () => {
            let result = new StringBuilder('name');
            result.prepend('xxx');
            assert.deepEqual(result._stringArray, ['x', 'x', 'x', 'n', 'a', 'm', 'e',]);
        });

        it('if not have nothing passed', () => {
            let result = () => new StringBuilder('name').append(20);
            assert.throw(result, 'Argument must be string');
        });
    });

    describe('Testing remove()', () => {
        it('should remove', () => {
            let result = new StringBuilder('name')
            result.remove(0, 1);
            assert.deepEqual(result._stringArray, ['a', 'm', 'e']);
        });
    })

    describe('Testing insertAt()', () => {
        it('if have string passed', () => {
            let result = new StringBuilder('name');
            result.insertAt('my', 1);
            assert.deepEqual(result._stringArray, ['n', 'm', 'y', 'a', 'm', 'e']);
        });
    });

    describe('Testing toString()', () => {
        it('if have string passed', () => {
            let result = new StringBuilder('name').toString();
            assert.deepEqual(result, 'name');
        });
    });

    describe('Testing _vrfyParam()', () => {
        it('if have string passed', () => {
            let result = () => StringBuilder._vrfyParam(20);
            assert.throw(result, 'Argument must be string');
        });
    });
});
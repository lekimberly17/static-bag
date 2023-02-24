const Bag = require('./Bag')

describe('Bag class', () => {
    // bag has weight
    test('bag has weight', () => {
        const bag = new Bag(23)
        expect(bag.weight).toBe(23)
    })
    // if bag has no weight, return error
    test('bag has no weight to return an error', () => {
        expect(() => new Bag()).toThrowError('bag needs weight')
    })
    // if bag weight exceeds maximum, return error
    test('bag weight exceeds maximum to return an error', () => {
        expect(() => new Bag(24)).toThrowError('bag weight exceeds maximum weight')
    })
    // if bag weight is at the maximum, should not throw an error
    test('bag weight at maximum should not throw an error', () => {
        expect(() => new Bag(Bag.MAX_WEIGHT)).not.toThrow()
    })
})

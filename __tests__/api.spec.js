const fetch = require('node-fetch')
const swapi = require('../src/api')

describe('uni test swapi api', () => {
    it('should return value from api', () => {
        expect.assertions(1);
        return swapi.getPeople(fetch).then(res => {
            expect(res.count).toEqual(87);
        })
    })

    it('should return value from api with promise', () => {
        expect.assertions(2);
        return swapi.getPeoplePromise(fetch).then(res => {
            expect(res.count).toEqual(87);
            expect(res.result.length).toBeGreaterThan(5);
        })
    })

    it('should return count and return func:getPeople() ', () => {
        const mockFetch = jest.fn()
            .mockReturnValue(Promise.resolve({
                json: () => Promise.resolve({
                    count: 89,
                    results: [0,1,2,3,4,5]
                })
            }))
        // expect.assertions(4)
        return swapi.getPeoplePromise(mockFetch).then(res => {
            expect(mockFetch.mock.calls.length).toBe(1);
            expect(mockFetch).toBeCalledWith('https://swapi.co/api/people');
            expect(res.count).toEqual(89);
            expect((res.result).length).toBeGreaterThan(5);
        })
    })
})

import {searchIn} from './search'

test('test searchIn', () => {
    expect(searchIn([{name: 'ben'}, {name: 'benoit'}, {name: 'noit'}], 'ben'))
    .toEqual([{name: 'ben'}, {name: 'benoit'}])

    expect(searchIn([{name: 'ben'}, {name: 'benoit'}, {name: 'noit'}], 'BeN'))
    .toEqual([{name: 'ben'}, {name: 'benoit'}])

    expect(searchIn([{name: 'ben'}, {name: 'benoit'}, {name: 'noit'}], 'NoiT'))
    .toEqual([{name: 'benoit'}, {name: 'noit'}])

    expect(searchIn([], 'BeN'))
    .toEqual([])

    expect(searchIn(null, 'BeN'))
    .toEqual([])

    expect(searchIn(undefined, 'BeN'))
    .toEqual([])
})
import Query from './query'
import {dataSourcesMock, i18nMock, user} from '../test'

describe('Test search', () => {
    test('Test search with results', () => {
        return expect(Query.search(undefined,{text: 'luke'}, {dataSources: dataSourcesMock}))
        .resolves
        .toContainEqual({"_type": "Person", "birthYear": "19BBY", "eyeColor": "blue", "gender": "male", "hairColor": "blond", "height": 172, "id": "cGVvcGxlOjE=", "mass": 77, "name": "Luke Skywalker", "skinColor": "fair"})
    })

    test('Test search any results', () => {
        return expect(Query.search(undefined,{text: 'koi moi ki'}, {dataSources: dataSourcesMock}))
        .resolves
        .toEqual([])
    })
})

describe('Test signIn', () => {
    test('Test signIn with good input', () => {
        const token = 'token1'
        const signIn = jest.fn()
        signIn.mockReturnValue(token)
        return expect(Query.signIn(undefined, {login: 'ben', password: 'deg'}
        , {dataSources: dataSourcesMock, i18n: i18nMock, signIn}))
        .resolves
        .toEqual({
            success: true,
            token,
            user
        })
    })
    test('Test signIn with bad login', () => {
        const token = 'token1'
        const signIn = jest.fn()
        signIn.mockReturnValue(token)
        return expect(Query.signIn(undefined, {login: 'unknow', password: 'deg'}
        , {dataSources: dataSourcesMock, i18n: i18nMock, signIn}))
        .resolves
        .toEqual({
            success: false,
            message: 'Login or password is incorrect'
        })
    })

    test('Test signIn with bad password', () => {
        const token = 'token1'
        const signIn = jest.fn()
        signIn.mockReturnValue(token)
        return expect(Query.signIn(undefined, {login: 'ben', password: 'bad'}
        , {dataSources: dataSourcesMock, i18n: i18nMock, signIn}))
        .resolves
        .toEqual({
            success: false,
            message: 'Login or password is incorrect'
        })
    })
})

describe('Test reloadSignIn', () => {
    test('Test reloadSignIn while we are authentificate', () => {
        const login = 'ben'
        return expect(Query.reloadSignIn(undefined, undefined, {dataSources: dataSourcesMock, login}))
        .toEqual({
            success: true,
            user: {
                login
            }
        })
    })
    test('Test reloadSignIn while we are not authentificate', () => {
        return expect(Query.reloadSignIn(undefined, undefined, {dataSources: dataSourcesMock}))
        .toEqual({
            success: false,
        })
    })
})

import {arrayEmpty, stringEmpty, validURL, Response, resolverPrivate, resolversPrivate} from './utils'
import { AuthenticationError } from 'apollo-server'

test('Util arrayEmpty', () => {
    expect(arrayEmpty([])).toBeTruthy()
    expect(arrayEmpty()).toBeTruthy()
    expect(arrayEmpty(null)).toBeTruthy()
    expect(arrayEmpty(undefined)).toBeTruthy()

    expect(arrayEmpty([1])).toBeFalsy()
    expect(arrayEmpty([1, 2])).toBeFalsy()
    expect(arrayEmpty(['a'])).toBeFalsy()
    expect(arrayEmpty([{a: 'r'}])).toBeFalsy()
})

test('Util stringEmpty', () => {
    expect(stringEmpty('')).toBeTruthy()
    expect(stringEmpty()).toBeTruthy()
    expect(stringEmpty(null)).toBeTruthy()
    expect(stringEmpty(undefined)).toBeTruthy()

    expect(stringEmpty('1')).toBeFalsy()
    expect(stringEmpty("it's me")).toBeFalsy()
})

test('Util validURL', () => {
    expect(validURL('https://www.google.com/')).toBeTruthy()
    expect(validURL('http://www.google.com:8080/persons')).toBeTruthy()
    expect(validURL('http://www.google.com:8080/persons?id=365PimKl')).toBeTruthy()
    expect(validURL('http://www.google.com:8080/persons?id=365PimKl&max=55')).toBeTruthy()
    expect(validURL('http://kingbuild.fr/world')).toBeTruthy()

    expect(validURL('http://kingbuild/world')).toBeFalsy()
    expect(validURL('localhost:8080')).toBeFalsy()
})

describe('Util Response', () => {
    test('Util Response message', () => {
        const response = new Response()
        expect(response).toEqual({
            success: true
        })

        response.setMessageError('name must be fill')
        expect(response).toEqual({
            success: false,
            message: 'name must be fill'
        })
    })

    test('Util Response details', () => {
        const response = new Response()
        response.addDetailsError('name', 'name must be fill')
        response.addDetailsError('age', 'age must be a positive number')
        expect(response).toEqual({
            success: false,
            details: [{key: 'name', message: 'name must be fill'},
            {key: 'age', message: 'age must be a positive number'}]
        })
    })
})

describe('Util resolver(s)Private', () => {
    describe('Util resolverPrivate', () => {
        test('Util resolverPrivate authentificate', () => {
            const mockResolver = jest.fn()
        
            const res = () => resolverPrivate(mockResolver)({parent : 'parent'}, {name : 'ben'},
                                                                {dataSource : {}, login: 'dede'}, {})
            expect(res).not.toThrow()
            expect(mockResolver).toHaveBeenCalledTimes(1)
        })
    
        test('Util resolverPrivate no authentificate', () => {
            const mockResolver = jest.fn()
        
            const res = () => resolverPrivate(mockResolver)({parent : 'parent'}, {name : 'ben'},
                                    {dataSource : {}}, {})
            expect(res).toThrow(AuthenticationError)
            expect(mockResolver).not.toHaveBeenCalled()
        })
    
        test('Util resolverPrivate no authentificate with errorAuth', () => {
            const mockResolver = jest.fn()
            const myError = Error('Authentification expired')
            const res = () => resolverPrivate(mockResolver)({parent : 'parent'}, {name : 'ben'},
                                    {dataSource : {}, errorAuth: myError}, {})
            expect(res).toThrow(myError)
            expect(mockResolver).not.toHaveBeenCalled()
        })
    })
    describe('Util resolversPrivate', () => {
        test('Util resolversPrivate authentificate', () => {
            const mockResolvers = {}
            const taille = 5
            for (let i = 0; i < taille; i++){
                mockResolvers[i] = jest.fn()
            }
        
            const resolvers = resolversPrivate(mockResolvers)

            for (let i = 0; i < taille; i++){
                let mockResolver = mockResolvers[i]
                let resolver = resolvers[i]
                const res = () => resolver({parent : 'parent'}, {name : 'ben'},
                                                                {dataSource : {}, login: 'dede'}, {})
                expect(res).not.toThrow()
                expect(mockResolver).toHaveBeenCalledTimes(1)
            }
        })

        test('Util resolverPrivate no authentificate', () => {
            const mockResolvers = {}
            const taille = 5
            for (let i = 0; i < taille; i++){
                mockResolvers[i] = jest.fn()
            }
        
            const resolvers = resolversPrivate(mockResolvers)

            for (let i = 0; i < taille; i++){
                let mockResolver = mockResolvers[i]
                let resolver = resolvers[i]
                const res = () => resolver({parent : 'parent'}, {name : 'ben'},
                                                                {dataSource : {}}, {})
                expect(res).toThrow(AuthenticationError)
                expect(mockResolver).not.toHaveBeenCalled()
            }
        })

        test('Util resolverPrivate no authentificate with errorAuth', () => {
            const mockResolvers = {}
            const taille = 5
            for (let i = 0; i < taille; i++){
                mockResolvers[i] = jest.fn()
            }
        
            const resolvers = resolversPrivate(mockResolvers)
            const myError = Error('Authentification expired')
            for (let i = 0; i < taille; i++){
                let mockResolver = mockResolvers[i]
                let resolver = resolvers[i]
                const res = () => resolver({parent : 'parent'}, {name : 'ben'},
                                                                {dataSource : {}, errorAuth: myError}, {})
                expect(res).toThrow(myError)
                expect(mockResolver).not.toHaveBeenCalled()
            }
        })
    })
})
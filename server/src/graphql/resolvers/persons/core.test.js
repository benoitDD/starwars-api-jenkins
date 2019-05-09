import {loadPerson, loadPersonDB} from './core'
import {dataSourcesMock, i18nMock, personSWAPI} from '../test'
import {UserInputError} from 'apollo-server'

describe('Test loadPerson', () => {
    function loadPersonTest(idExternal){
        return loadPerson(idExternal, dataSourcesMock, i18nMock)
    }
    test('Test loadPerson when exist', () => {
        return expect(loadPersonTest('1234'))
        .resolves
        .toEqual(personSWAPI)
    })

    test("Test loadPerson when doesn't exist", () => {
        return expect(loadPersonTest('unknow'))
        .rejects
        .toThrow(new UserInputError("The person of id _id_ don't exist!"))
    })
})

describe('Test loadPersonDB', () => {
    function loadPersonDBTest(idExternal){
        return loadPersonDB(idExternal, dataSourcesMock)
    }
    test('Test loadPersonDB when exist', () => {
        return expect(loadPersonDBTest('1234'))
        .resolves
        .toEqual({imagesHeader: null})
    })

    test("Test loadPersonDB when doesn't exist", () => {
        return expect(loadPersonDBTest('unknow'))
        .resolves
        .toBeNull()
    })
})
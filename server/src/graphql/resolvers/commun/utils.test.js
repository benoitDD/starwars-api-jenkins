import {getOrCreateObject, addImage, returnObjectFull} from './utils'
import {dataSourcesMock, i18nMock, personSWAPI, objectDB, planetSWAPI,
    speciesSWAPI, starshipSWAPI, vehicleSWAPI} from '../test'
import {UserInputError} from 'apollo-server'

describe('Test getOrCreateObject', () => {
    function getOrCreateObjectTest(type){
        return getOrCreateObject(type, '789', dataSourcesMock)
    }

    test('Test getOrCreateObject for person', () => {
        expect(() => getOrCreateObjectTest('person')).not.toThrow()
        return expect(getOrCreateObjectTest('person')).resolves.toBe(objectDB)
    })

    test('Test getOrCreateObject for planet', () => {
        expect(() => getOrCreateObjectTest('planet')).not.toThrow()
        return expect(getOrCreateObjectTest('planet')).resolves.toBe(objectDB)
    })

    test('Test getOrCreateObject for species', () => {
        expect(() => getOrCreateObjectTest('species')).not.toThrow()
        return expect(getOrCreateObjectTest('species')).resolves.toBe(objectDB)
    })

    test('Test getOrCreateObject for starship', () => {
        expect(() => getOrCreateObjectTest('starship')).not.toThrow()
        return expect(getOrCreateObjectTest('starship')).resolves.toBe(objectDB)
    })

    test('Test getOrCreateObject for vehicle', () => {
        expect(() => getOrCreateObjectTest('vehicle')).not.toThrow()
        return expect(getOrCreateObjectTest('vehicle')).resolves.toBe(objectDB)
    })
})

describe('Test addImage', () => {
    function addImageTest(type){
        return addImage(type, '789', {}, dataSourcesMock)
    }

    test('Test addImage for person', () => {
        expect(() => addImageTest('person')).not.toThrow()
        return expect(addImageTest('person')).resolves.toBe(objectDB)
    })

    test('Test addImage for planet', () => {
        expect(() => addImageTest('planet')).not.toThrow()
        return expect(addImageTest('planet')).resolves.toBe(objectDB)
    })

    test('Test addImage for species', () => {
        expect(() => addImageTest('species')).not.toThrow()
        return expect(addImageTest('species')).resolves.toBe(objectDB)
    })

    test('Test addImage for starship', () => {
        expect(() => addImageTest('starship')).not.toThrow()
        return expect(addImageTest('starship')).resolves.toBe(objectDB)
    })

    test('Test addImage for vehicle', () => {
        expect(() => addImageTest('vehicle')).not.toThrow()
        return expect(addImageTest('vehicle')).resolves.toBe(objectDB)
    })
})

describe('Test returnObjectFull', () => {
    function returnObjectFullTest(type, idExternal = 'cGVvcGxlOjE='){
        return returnObjectFull(type, dataSourcesMock, i18nMock)({idExternal})
    }

    describe('Test returnObjectFull for person', () => {
        test('Test returnObjectFull for person without exception', () => {
            expect(() => returnObjectFullTest('person')).not.toThrow()

            return expect(returnObjectFullTest('person'))
            .resolves
            .toEqual({
                success: true,
                person: personSWAPI
            })
        })

        test('Test returnObjectFull for person with exception', () => {
            return expect(returnObjectFullTest('person', 'unknow'))
            .rejects
            .toThrow(new UserInputError("The person of id _id_ don't exist!"))
        })
    })

    describe('Test returnObjectFull for planet', () => {
        test('Test returnObjectFull for planet without exception', () => {
            expect(() => returnObjectFullTest('planet')).not.toThrow()

            return expect(returnObjectFullTest('planet'))
            .resolves
            .toEqual({
                success: true,
                planet: planetSWAPI
            })
        })

        test('Test returnObjectFull for planet with exception', () => {
            return expect(returnObjectFullTest('planet', 'unknow'))
            .rejects
            .toThrow(new UserInputError("The planet of id _id_ don't exist!"))
        })
    })

    describe('Test returnObjectFull for species', () => {
        test('Test returnObjectFull for species without exception', () => {
            expect(() => returnObjectFullTest('species')).not.toThrow()

            return expect(returnObjectFullTest('species'))
            .resolves
            .toEqual({
                success: true,
                species: speciesSWAPI
            })
        })

        test('Test returnObjectFull for species with exception', () => {
            return expect(returnObjectFullTest('species', 'unknow'))
            .rejects
            .toThrow(new UserInputError("The specie of id _id_ don't exist!"))
        })
    })

    describe('Test returnObjectFull for starship', () => {
        test('Test returnObjectFull for starship without exception', () => {
            expect(() => returnObjectFullTest('starship')).not.toThrow()

            return expect(returnObjectFullTest('starship'))
            .resolves
            .toEqual({
                success: true,
                starship: starshipSWAPI
            })
        })

        test('Test returnObjectFull for starship with exception', () => {
            return expect(returnObjectFullTest('starship', 'unknow'))
            .rejects
            .toThrow(new UserInputError("The starship of id _id_ don't exist!"))
        })
    })

    describe('Test returnObjectFull for vehicle', () => {
        test('Test returnObjectFull for vehicle without exception', () => {
            expect(() => returnObjectFullTest('vehicle')).not.toThrow()

            return expect(returnObjectFullTest('vehicle'))
            .resolves
            .toEqual({
                success: true,
                vehicle: vehicleSWAPI
            })
        })

        test('Test returnObjectFull for vehicle with exception', () => {
            return expect(returnObjectFullTest('vehicle', 'unknow'))
            .rejects
            .toThrow(new UserInputError("The vehicle of id _id_ don't exist!"))
        })
    })

})
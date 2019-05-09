import Mutation from './mutation'
import {dataSourcesMock, i18nMock, createReadStreamMock,
    personSWAPI, planetSWAPI, speciesSWAPI, starshipSWAPI, vehicleSWAPI, user} from '../test'

//jest.mock('fs')

describe('Test addImage', () => {
    const mimetypePng = 'image/png'
    const mimetypeMpeg = 'image/mpeg'
    const inputAddImageFn = (type, mimetype, title = 'luke skywalker') => ({
        idExternal: '789',
        type,
        imageHeader: {
            title,
            file: Promise.resolve({createReadStream: createReadStreamMock, mimetype})
        }
    })

    describe('Test addImage without exception', () => {
        test('Test addImage without exception for person', () => {
            return expect(Mutation.addImage(undefined,
                {inputAddImage : inputAddImageFn('person', mimetypePng)}, 
                {dataSources: dataSourcesMock, i18n: i18nMock}))
            .resolves
            .toEqual({
                success: true,
                person: personSWAPI
            })
        })
        test('Test addImage without exception for planet', () => {
            return expect(Mutation.addImage(undefined,
                {inputAddImage : inputAddImageFn('planet', mimetypePng)}, 
                {dataSources: dataSourcesMock, i18n: i18nMock}))
            .resolves
            .toEqual({
                success: true,
                planet: planetSWAPI
            })
        })
        test('Test addImage without exception for species', () => {
            return expect(Mutation.addImage(undefined,
                {inputAddImage : inputAddImageFn('species', mimetypePng)}, 
                {dataSources: dataSourcesMock, i18n: i18nMock}))
            .resolves
            .toEqual({
                success: true,
                species: speciesSWAPI
            })
        })
        test('Test addImage without exception for starship', () => {
            return expect(Mutation.addImage(undefined,
                {inputAddImage : inputAddImageFn('starship', mimetypePng)}, 
                {dataSources: dataSourcesMock, i18n: i18nMock}))
            .resolves
            .toEqual({
                success: true,
                starship: starshipSWAPI
            })
        })
        test('Test addImage without exception for vehicle', () => {
            return expect(Mutation.addImage(undefined,
                {inputAddImage : inputAddImageFn('vehicle', mimetypePng)}, 
                {dataSources: dataSourcesMock, i18n: i18nMock}))
            .resolves
            .toEqual({
                success: true,
                vehicle: vehicleSWAPI
            })
        })
    })
    describe('Test addImage with user input error', () => {
        test('Test addImage without title', () => {
            return expect(Mutation.addImage(undefined,
                {inputAddImage : inputAddImageFn('person', mimetypePng, null)}, 
                {dataSources: dataSourcesMock, i18n: i18nMock}))
            .toEqual({
                success: false,
                details: [
                    {
                     key: "title",
                     message: "A title must be fill",
                    },
                ]
            })
        })
        test('Test addImage with mimetype no handle', () => {
            return expect(Mutation.addImage(undefined,
                {inputAddImage : inputAddImageFn('person', mimetypeMpeg)}, 
                {dataSources: dataSourcesMock, i18n: i18nMock}))
            .resolves
            .toEqual({
                success: false,
                message: "The files _extension_ don't allow"
            })
        })
    })
})

describe('Test removeImage', () => {
    const inputRemoveImageFn = type => ({
        idExternal: '789',
        type,
        idImage: '123'
    })
    describe('Test removeImage without error', () => {
        test('Test removeImage for person', () => {
            return expect(Mutation.removeImage(undefined, {inputRemoveImage: inputRemoveImageFn('person')},
                {dataSources: dataSourcesMock})
            )
            .resolves
            .toEqual({
                success: true,
                person: personSWAPI
            })
        })
    })
    describe('Test removeImage with error', () => {
        test('Test removeImage with type unknow', () => {
            return expect(Mutation.removeImage(undefined, {inputRemoveImage: inputRemoveImageFn('unknow')},
                {dataSources: dataSourcesMock})
            )
            .resolves
            .toEqual({
                success: false,
                message: "The type unknow don't handle"
            })
        })
    })
})

describe('Test signUp', () => {
    test('Test signUp login without error', () => {
        return expect(Mutation.signUp(undefined, {login: 'unknow', password: 'deg'}, {dataSources: dataSourcesMock, i18n: i18nMock}))
        .resolves
        .toEqual({
            success: true,
            user: user
        })
    })

    test('Test signUp login exist', () => {
        return expect(Mutation.signUp(undefined, {login: 'ben', password: 'deg'}, {dataSources: dataSourcesMock, i18n: i18nMock}))
        .resolves
        .toEqual({
            success: false,
            message: "Login exist!"
        })
    })
})
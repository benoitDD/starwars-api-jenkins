import {
    objectDB, objectDBPromise,
    personSWAPI, personSWAPIPromise,
    planetSWAPI, planetSWAPIPromise,
    speciesSWAPI, speciesSWAPIPromise,
    starshipSWAPI, starshipSWAPIPromise,
    vehicleSWAPI, vehicleSWAPIPromise,
    user, userPromise
} from './model'

import {personsSearch} from './modelSearchPersons'
import {planetsSearch} from './modelSearchPlanets'
import {speciesSearch} from './modelSearchSpecies'
import {starshipsSearch} from './modelSearchStarships'
import {vehiclesSearch} from './modelSearchVehicles'

let getOrCreateObjectMock = jest.fn()
getOrCreateObjectMock.mockReturnValue(objectDBPromise)

let findObjectByIdExternalMock = jest.fn(id => id !== 'unknow' ? objectDBPromise: Promise.resolve())

let addImageMock = jest.fn()
addImageMock.mockReturnValue(objectDBPromise)

let removeImageMock = jest.fn()
removeImageMock.mockReturnValue(objectDBPromise) 

let findByLoginMock = jest.fn(login => login !== 'unknow' ? userPromise: Promise.resolve())

let addUserMock = jest.fn()
addUserMock.mockReturnValue(userPromise)

let getPersonSWAPI = jest.fn(idExternal => idExternal !== 'unknow' ? personSWAPIPromise: Promise.resolve())

let getPlanetSWAPI = jest.fn(idExternal => idExternal !== 'unknow' ? planetSWAPIPromise: Promise.resolve())

let getSpeciesSWAPI = jest.fn(idExternal => idExternal !== 'unknow' ? speciesSWAPIPromise: Promise.resolve())

let getStarshipSWAPI = jest.fn(idExternal => idExternal !== 'unknow' ? starshipSWAPIPromise: Promise.resolve())

let getVehicleSWAPI = jest.fn(idExternal => idExternal !== 'unknow' ? vehicleSWAPIPromise: Promise.resolve())

let getAllObjectsForSearchSWAPI = jest.fn(() => {
    return Promise.resolve({
        persons: personsSearch, planets: planetsSearch,
        species: speciesSearch, starships: starshipsSearch,
        vehicles: vehiclesSearch
    })
})

const serviceObjectsDB = {
    getOrCreateObject: getOrCreateObjectMock,
    addImage: addImageMock,
    removeImage: removeImageMock,
    findObjectByIdExternal: findObjectByIdExternalMock
}

let dataSourcesMock = {
    databasePerson: serviceObjectsDB,
    databasePlanet: serviceObjectsDB,
    databaseSpecies: serviceObjectsDB,
    databaseStarship: serviceObjectsDB,
    databaseVehicle: serviceObjectsDB,
    databaseUser: {
        findByLogin: findByLoginMock,
        add: addUserMock
    },
    clientApolloStarWars: {
        getPerson: getPersonSWAPI,
        getPlanet: getPlanetSWAPI,
        getSpecies: getSpeciesSWAPI,
        getStarship: getStarshipSWAPI,
        getVehicle: getVehicleSWAPI,
        getAllObjectsForSearch: getAllObjectsForSearchSWAPI
    }
}

const i18nMock = {
    t: jest.fn(x => x)
}

const pipeMock = jest.fn()
const createReadStreamMock = jest.fn(() => ({pipe: pipeMock}))

export {
    dataSourcesMock, i18nMock,
    objectDB, personSWAPI, planetSWAPI, speciesSWAPI, starshipSWAPI, vehicleSWAPI, user,
    createReadStreamMock
}
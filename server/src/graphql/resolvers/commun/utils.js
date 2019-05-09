import {Response} from '../utils/utils'
import {loadPerson} from '../persons/core'
import {loadPlanet} from '../planets/core'
import {loadSpecies} from '../species/core'
import {loadStarship} from '../starships/core'
import {loadVehicle} from '../vehicles/core'

const TYPE_PERSON = 'person'
const TYPE_PLANET = 'planet'
const TYPE_SPECIES = 'species'
const TYPE_STARSHIP = 'starship'
const TYPE_VEHICLE = 'vehicle'

function getContextObject(type, context){
    switch(type){
        case TYPE_PERSON:
            return context[TYPE_PERSON]
        case TYPE_PLANET:
            return context[TYPE_PLANET]
        case TYPE_SPECIES:
            return context[TYPE_SPECIES]
        case TYPE_STARSHIP:
            return context[TYPE_STARSHIP]
        case TYPE_VEHICLE:
            return context[TYPE_VEHICLE]
        default:
            throw Error(`The type ${type} don't handle`)
    }
}

function getDataBaseObject(type, dataSources){
    return getContextObject(type, {
        [TYPE_PERSON]: dataSources.databasePerson,
        [TYPE_PLANET]: dataSources.databasePlanet,
        [TYPE_SPECIES]: dataSources.databaseSpecies,
        [TYPE_STARSHIP]: dataSources.databaseStarship,
        [TYPE_VEHICLE]: dataSources.databaseVehicle
    })
}

function getLoaderObject(type){
    return getContextObject(type, {
        [TYPE_PERSON]: loadPerson,
        [TYPE_PLANET]: loadPlanet,
        [TYPE_SPECIES]: loadSpecies,
        [TYPE_STARSHIP]: loadStarship,
        [TYPE_VEHICLE]: loadVehicle
    })
}

function getOrCreateObject(type, id, dataSources){
    return getDataBaseObject(type, dataSources).getOrCreateObject(id)
}

function addImage(type, idExternal, image, dataSources){
    return getDataBaseObject(type, dataSources).addImage(idExternal, image)
}

function returnObjectFull(type, dataSources, i18n){
    return ({idExternal}) => {
        return getLoaderObject(type)(idExternal, dataSources, i18n)
        .then(object => {
            var response = new Response()
            response[type] = object
            return response
        })
    }
}

function returnError(error){
    var response = new Response()
    //console.error(error);
    
    response.setMessageError(error.message)
    return response
}

export {addImage, returnObjectFull, returnError, getOrCreateObject, getDataBaseObject}
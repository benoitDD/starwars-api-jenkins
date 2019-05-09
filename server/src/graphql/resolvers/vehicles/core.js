import {resolveVehicle, resolveVehicleMore} from './resolve'
import {UserInputError} from 'apollo-server'

function loadVehicle(id, dataSources, i18n){
    return dataSources.clientApolloStarWars.getVehicle(id)
    .then(vehicle => {
        if(!vehicle){
            throw new UserInputError(i18n.t("The vehicle of id _id_ don't exist!", {id}))
        }
        return resolveVehicle(vehicle)  
    })
}

function loadVehicleDB(id, dataSources){
    return dataSources.databaseVehicle.findObjectByIdExternal(id)
    .then(vehiculeDB => {
        if(!vehiculeDB) return null
        return resolveVehicleMore(vehiculeDB)
    })
}

export {loadVehicle, loadVehicleDB}
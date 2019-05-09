import {resolvePlanet, resolvePlanetMore} from './resolve'
import {UserInputError} from 'apollo-server'

function loadPlanet(id, dataSources, i18n){
    return dataSources.clientApolloStarWars.getPlanet(id)
    .then(planet => {
        if(!planet){
            throw new UserInputError(i18n.t("The planet of id _id_ don't exist!", {id}))
        }
        return resolvePlanet(planet)
    })
}

function loadPlanetDB(id, dataSources){
    return dataSources.databasePlanet.findObjectByIdExternal(id)
    .then(planetDB => {
        if(!planetDB){
            return null
        }
        return resolvePlanetMore(planetDB)
    })
}

export {loadPlanet, loadPlanetDB}
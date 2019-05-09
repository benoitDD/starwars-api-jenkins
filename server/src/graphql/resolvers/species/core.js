import {resolveSpecies, resolveSpeciesMore} from './resolve'
import {UserInputError} from 'apollo-server'

function loadSpecies(id, dataSources, i18n){
    return dataSources.clientApolloStarWars.getSpecies(id)
    .then(species => {
        if(!species){
            throw new UserInputError(i18n.t("The specie of id _id_ don't exist!", {id}))
        }
        return resolveSpecies(species) 
    })
}

function loadSpeciesDB(id, dataSources){
    return dataSources.databaseSpecies.findObjectByIdExternal(id)
    .then(speciesDB => {
        if(!speciesDB) return null
        return resolveSpeciesMore(speciesDB)
    })
}

export {loadSpecies, loadSpeciesDB}
import {resolveStarship, resolveStarshipMore} from './resolve'
import {UserInputError} from 'apollo-server'

function loadStarship(id, dataSources, i18n){
    return dataSources.clientApolloStarWars.getStarship(id)
    .then(starship => {
        if(!starship){
            throw new UserInputError(i18n.t("The starship of id _id_ don't exist!", {id}))
        }
        return resolveStarship(starship)   
    })
}

function loadStarshipDB(id, dataSources){
    return dataSources.databaseStarship.findObjectByIdExternal(id)
    .then(starshipDB => {
        if(!starshipDB) return null
        return resolveStarshipMore(starshipDB)
    })
}

export {loadStarship, loadStarshipDB}
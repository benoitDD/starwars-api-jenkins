import {resolvePerson, resolvePersonMore} from './resolve'
import {UserInputError} from 'apollo-server'

function loadPerson(idExternal, dataSources, i18n){
    return dataSources.clientApolloStarWars.getPerson(idExternal)
    .then(person => {
        if(!person){
            throw new UserInputError(i18n.t("The person of id _id_ don't exist!", {idExternal}))
        }
        return resolvePerson(person) 
    })
}

function loadPersonDB(idExternal, dataSources){
    return dataSources.databasePerson.findObjectByIdExternal(idExternal)
    .then(personDB => {
        if(!personDB){
            return null
        }
        return resolvePersonMore(personDB)
    })
}

export {loadPerson, loadPersonDB}
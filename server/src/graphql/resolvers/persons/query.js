import {resolvePersons} from './resolve'
import {loadPerson} from './core'
import {resolversPrivate} from '../utils/utils'

const Query = {
    allPersons: (_,{pageSize = 10, after, before}, { dataSources }) => {
        return dataSources.clientApolloStarWars.getAllPeople(pageSize, after, before)
        .then( allPeopleConnection => {
                return {
                    startCursor: allPeopleConnection.pageInfo.startCursor,
                    endCursor: allPeopleConnection.pageInfo.endCursor,
                    totalCount: allPeopleConnection.totalCount,
                    persons: resolvePersons(allPeopleConnection.people)
                }
        })
    },
    person: (_,{id}, { dataSources, i18n }) => {
        return loadPerson(id, dataSources, i18n)
    }
}

export default resolversPrivate(Query)
import {resolveSpeciess} from './resolve'
import {loadSpecies} from './core'

const Query = {
    allSpecies: (_,{pageSize = 10, after, before}, { dataSources }) => {
        return dataSources.clientApolloStarWars.getAllSpecies(pageSize, after, before)
        .then( allSpeciesConnection => {
                return {
                    startCursor: allSpeciesConnection.pageInfo.startCursor,
                    endCursor: allSpeciesConnection.pageInfo.endCursor,
                    totalCount: allSpeciesConnection.totalCount,
                    species: resolveSpeciess(allSpeciesConnection.species)
                }
        })
    },
    species: (_,{id}, { dataSources, i18n }) => {
        return loadSpecies(id, dataSources, i18n)
    }
}

export default Query
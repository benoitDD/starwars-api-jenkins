import {loadSpeciesDB} from './core'
import {resolvePlanet} from '../planets/resolve'
import {resolvePersons} from '../persons/resolve'

const Type = {
    Species: {
        speciesMore: (species, _, {dataSources}) => {
            return loadSpeciesDB(species.id, dataSources)
        },
        homeworld: (species, _, { dataSources }) => {
            return dataSources.clientApolloStarWars.getPlanetOfSpecies(species.id)
            .then(planet => {
                if(!planet) return null
                return resolvePlanet(planet)
            })
        },
        persons: (species, {pageSize = 10, after, before}, { dataSources }) => {
            return dataSources.clientApolloStarWars.getAllPersonsOfSpecies(species.id, pageSize, after, before)
            .then( personConnection => {
                    return {
                        startCursor: personConnection.pageInfo.startCursor,
                        endCursor: personConnection.pageInfo.endCursor,
                        totalCount: personConnection.totalCount,
                        persons: resolvePersons(personConnection.people)
                    }
            })
        }
    },
    SpeciesMore: {
        imagesHeader: (speciesMore,{first= false}, { dataSources }) => {
            return first && speciesMore.imagesHeader ?
                [speciesMore.imagesHeader[0]]
                : 
                speciesMore.imagesHeader
        }
    }
}

export default Type
import {loadStarshipDB} from './core'
import {resolvePersons} from '../persons/resolve'

const Type = {
    Starship: {
        starshipMore: (starship, _, {dataSources}) => {
            return loadStarshipDB(starship.id, dataSources)
        },
        persons: (starship, {pageSize = 10, after, before}, { dataSources }) => {
            return dataSources.clientApolloStarWars.getAllPersonsOfStarship(starship.id, pageSize, after, before)
            .then( pilotConnection => {
                    return {
                        startCursor: pilotConnection.pageInfo.startCursor,
                        endCursor: pilotConnection.pageInfo.endCursor,
                        totalCount: pilotConnection.totalCount,
                        persons: resolvePersons(pilotConnection.pilots)
                    }
            })
        }
    },
    StarshipMore: {
        imagesHeader: (starshipMore,{first= false}, { dataSources }) => {
            return first && starshipMore.imagesHeader ?
                [starshipMore.imagesHeader[0]]
                : 
                starshipMore.imagesHeader
        }
    }
}

export default Type
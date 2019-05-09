import {loadPlanetDB} from './core'
import {resolvePersons} from '../persons/resolve'

const Type = {
    PlanetMore: {
        imagesHeader: (planetMore,{first= false}, { dataSources }) => {
            return first && planetMore.imagesHeader ?
                [planetMore.imagesHeader[0]]
                : 
                planetMore.imagesHeader
        }
    },
    Planet: {
        planetMore: (planet, _, {dataSources}) => {
            return loadPlanetDB(planet.id, dataSources)
        },
        persons: (planet, {pageSize = 10, after, before}, { dataSources }) => {
            return dataSources.clientApolloStarWars.getAllPersonsOfPlanet(planet.id, pageSize, after, before)
            .then( residentConnection => {
                    return {
                        startCursor: residentConnection.pageInfo.startCursor,
                        endCursor: residentConnection.pageInfo.endCursor,
                        totalCount: residentConnection.totalCount,
                        persons: resolvePersons(residentConnection.residents)
                    }
            })
        }
    }
}

export default Type
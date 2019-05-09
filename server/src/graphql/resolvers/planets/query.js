import {resolvePlanets} from './resolve'
import {loadPlanet} from './core'

const Query = {
    allPlanets: (_,{pageSize = 10, after, before}, { dataSources }) => {
        return dataSources.clientApolloStarWars.getAllPlanets(pageSize, after, before).then(
            allPlanetsConnection => {
                return {
                    startCursor: allPlanetsConnection.pageInfo.startCursor,
                    endCursor: allPlanetsConnection.pageInfo.endCursor,
                    totalCount: allPlanetsConnection.totalCount,
                    planets: resolvePlanets(allPlanetsConnection.planets)
                }
            }
        )
    },
    planet: (_,{id}, { dataSources, i18n }) => {
        return loadPlanet(id, dataSources, i18n)
    }
}

export default Query
import {resolveStarships} from './resolve'
import {loadStarship} from './core'

const Query = {
    allStarships: (_,{pageSize = 10, after, before}, { dataSources }) => {
        return dataSources.clientApolloStarWars.getAllStarships(pageSize, after, before).then(
            allStarshipsConnection => {
                return {
                    startCursor: allStarshipsConnection.pageInfo.startCursor,
                    endCursor: allStarshipsConnection.pageInfo.endCursor,
                    totalCount: allStarshipsConnection.totalCount,
                    starships: resolveStarships(allStarshipsConnection.starships)
                }
            }
        )
    },
    starship: (_,{id}, { dataSources, i18n }) => {
        return loadStarship(id, dataSources, i18n)
    }
}

export default Query
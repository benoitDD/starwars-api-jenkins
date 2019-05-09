import {resolveVehicles} from './resolve'
import {loadVehicle} from './core'

const Query = {
    allVehicles: (_,{pageSize = 10, after, before}, { dataSources }) => {
        return dataSources.clientApolloStarWars.getAllVehicles(pageSize, after, before).then(
            allVehiclesConnection => {
                return {
                    startCursor: allVehiclesConnection.pageInfo.startCursor,
                    endCursor: allVehiclesConnection.pageInfo.endCursor,
                    totalCount: allVehiclesConnection.totalCount,
                    vehicles: resolveVehicles(allVehiclesConnection.vehicles)
                }
            }
        )
    },
    vehicle: (_,{id}, { dataSources, i18n }) => {
        return loadVehicle(id, dataSources, i18n)
    }
}

export default Query
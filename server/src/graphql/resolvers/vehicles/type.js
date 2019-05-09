import {loadVehicleDB} from './core'
import {resolvePersons} from '../persons/resolve'

const Type = {
    Vehicle: {
       vehicleMore: (vehicle, _, {dataSources}) => {
            return loadVehicleDB(vehicle.id, dataSources)
        },
        persons: (vehicle, {pageSize = 10, after, before}, { dataSources }) => {
            return dataSources.clientApolloStarWars.getAllPersonsOfVehicle(vehicle.id, pageSize, after, before)
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
    VehicleMore: {
        imagesHeader: (vehicleMore,{first= false}, { dataSources }) => {
            return first && vehicleMore.imagesHeader ?
                [vehicleMore.imagesHeader[0]]
                : 
                vehicleMore.imagesHeader
        }
    }
}

export default Type
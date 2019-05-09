import {loadPersonDB} from './core'
import {resolvePlanet} from '../planets/resolve'
import {resolveStarships} from '../starships/resolve'
import {resolveVehicles} from '../vehicles/resolve'
import {resolveSpecies} from '../species/resolve'

const Type = {
    Person: {
        personMore: (person, _, { dataSources }) => {
            return loadPersonDB(person.id, dataSources)
        },
        homeworld: (person, _, { dataSources }) => {
            return dataSources.clientApolloStarWars.getPlanetOfPerson(person.id)
            .then(planet => {
                if(!planet) return null
                return resolvePlanet(planet)
            })
        },
        species: (person, _, { dataSources }) => {
            return dataSources.clientApolloStarWars.getSpeciesOfPerson(person.id)
            .then(species => {
                if(!species) return null
                return resolveSpecies(species)
            })
        },
        starships: (person, {pageSize = 10, after, before}, { dataSources }) => {
            return dataSources.clientApolloStarWars.getAllStarshipsOfPerson(person.id, pageSize, after, before)
            .then( starshipConnection => {
                    return {
                        startCursor: starshipConnection.pageInfo.startCursor,
                        endCursor: starshipConnection.pageInfo.endCursor,
                        totalCount: starshipConnection.totalCount,
                        starships: resolveStarships(starshipConnection.starships)
                    }
            })
        },
        vehicles: (person, {pageSize = 10, after, before}, { dataSources }) => {
            return dataSources.clientApolloStarWars.getAllVehiclesOfPerson(person.id, pageSize, after, before)
            .then( vehicleConnection => {
                    return {
                        startCursor: vehicleConnection.pageInfo.startCursor,
                        endCursor: vehicleConnection.pageInfo.endCursor,
                        totalCount: vehicleConnection.totalCount,
                        vehicles: resolveVehicles(vehicleConnection.vehicles)
                    }
            })
        }
    },
    PersonMore: {
        imagesHeader: (personMore,{first= false}, { dataSources }) => {
            return first && personMore.imagesHeader ?
                [personMore.imagesHeader[0]]
                : 
                personMore.imagesHeader
        }
    }
}

export default Type
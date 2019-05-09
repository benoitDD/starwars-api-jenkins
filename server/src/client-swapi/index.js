import {Commun} from './commun'
import { GET_ALL_PEOPLE, GET_PERSON,
        GET_ALL_PLANETS, GET_PLANET, 
        GET_ALL_SPECIES, GET_SPECIES,
        GET_ALL_STARSHIPS, GET_STARSHIP,
        GET_ALL_VEHICLES, GET_VEHICLE,
        GET_PLANET_OF_PERSON,
        GET_SPECIES_OF_PERSON,
        GET_PLANET_OF_SPECIES,
        GET_STARSHIPS_OF_PERSON,
        GET_VEHICLES_OF_PERSON,
        GET_PERSONS_OF_PLANET,
        GET_PERSONS_OF_SPECIES,
        GET_PERSONS_OF_STARSHIP, GET_PERSONS_OF_VEHICLE
      } from './query'

class StarWarsGraphQLAPI extends Commun {
    getAllPeople(pageSize = 10, after, before) {
        return this.getAllObject(pageSize, after, before, GET_ALL_PEOPLE)
        .then(data => (data.allPeople))
    }

    getPerson(id) {
        return this.getObject(id, GET_PERSON)
        .then(data => (data.person))
    }

    getAllPlanets(pageSize = 10, after, before) {
        return this.getAllObject(pageSize, after, before, GET_ALL_PLANETS)
        .then(data => (data.allPlanets))
    }

    getPlanet(id) {
        return this.getObject(id, GET_PLANET)
        .then(data => (data.planet))
    }

    getAllSpecies(pageSize = 10, after, before) {
        return this.getAllObject(pageSize, after, before, GET_ALL_SPECIES)
        .then(data => (data.allSpecies))
    }

    getSpecies(id) {
        return this.getObject(id, GET_SPECIES)
        .then(data => (data.species))
    }

    getAllStarships(pageSize = 10, after, before) {
        return this.getAllObject(pageSize, after, before, GET_ALL_STARSHIPS)
        .then(data => (data.allStarships))
    }

    getStarship(id) {
        return this.getObject(id, GET_STARSHIP)
        .then(data => (data.starship))
    }

    getAllVehicles(pageSize = 10, after, before) {
        return this.getAllObject(pageSize, after, before, GET_ALL_VEHICLES)
        .then(data => (data.allVehicles))
    }

    getVehicle(id) {
        return this.getObject(id, GET_VEHICLE)
        .then(data => (data.vehicle))
    }

    getPlanetOfPerson(idPerson){
        return this.getObject(idPerson, GET_PLANET_OF_PERSON)
        .then(data => (data.person ? data.person.homeworld : null))
    }

    getSpeciesOfPerson(idPerson){
        return this.getObject(idPerson, GET_SPECIES_OF_PERSON)
        .then(data => (data.person ? data.person.species : null))
    }

    getPlanetOfSpecies(idSpecies){
        return this.getObject(idSpecies, GET_PLANET_OF_SPECIES)
        .then(data => (data.species ? data.species.homeworld : null))
    }

    getAllStarshipsOfPerson(id, pageSize = 10, after, before) {
        return this.getAllObjectOf(id, pageSize, after, before, GET_STARSHIPS_OF_PERSON)
        .then(data => (data.person ? data.person.starshipConnection : null))
    }

    getAllVehiclesOfPerson(id, pageSize = 10, after, before) {
        return this.getAllObjectOf(id, pageSize, after, before, GET_VEHICLES_OF_PERSON)
        .then(data => (data.person ? data.person.vehicleConnection : null))
    }

    getAllPersonsOfPlanet(id, pageSize = 10, after, before) {
        return this.getAllObjectOf(id, pageSize, after, before, GET_PERSONS_OF_PLANET)
        .then(data => (data.planet ? data.planet.residentConnection : null))
    }

    getAllPersonsOfSpecies(id, pageSize = 10, after, before) {
        return this.getAllObjectOf(id, pageSize, after, before, GET_PERSONS_OF_SPECIES)
        .then(data => (data.species ? data.species.personConnection : null))
    }

    getAllPersonsOfStarship(id, pageSize = 10, after, before) {
        return this.getAllObjectOf(id, pageSize, after, before, GET_PERSONS_OF_STARSHIP)
        .then(data => (data.starship ? data.starship.pilotConnection : null))
    }

    getAllPersonsOfVehicle(id, pageSize = 10, after, before) {
        return this.getAllObjectOf(id, pageSize, after, before, GET_PERSONS_OF_VEHICLE)
        .then(data => (data.vehicle ? data.vehicle.pilotConnection : null))
    }


    getAllObjectsForSearch() {
        const MAX_OBJECT = 100
        return Promise.all([
            this.getAllPeople(MAX_OBJECT),
            this.getAllPlanets(MAX_OBJECT),
            this.getAllSpecies(MAX_OBJECT),
            this.getAllStarships(MAX_OBJECT),
            this.getAllVehicles(MAX_OBJECT)
        ])
        .then(([personsConnection, planetsConnection, speciesConnection, starshipsConnection, vehiclesConnection]) => 
            ({
                persons: personsConnection.people,
                planets: planetsConnection.planets,
                species: speciesConnection.species,
                starships: starshipsConnection.starships,
                vehicles: vehiclesConnection.vehicles
            })
        )
    }
}

const service = new StarWarsGraphQLAPI()

export default service
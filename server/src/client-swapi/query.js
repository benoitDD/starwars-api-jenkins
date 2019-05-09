import {createQuery_get_all_object, createQuery_get_object, createQuery_get_child_in,
    createQuery_get_childAll_in} from './utils'
import {FRAGMENT_PERSON, FRAGMENT_PLANET, FRAGMENT_SPECIES, FRAGMENT_STARSHIP
    ,FRAGMENT_VEHICLE} from'./fragments'

const GET_ALL_PEOPLE = createQuery_get_all_object('allPeople', 'people', FRAGMENT_PERSON, 'PersonFragment')
const GET_PERSON = createQuery_get_object('person', FRAGMENT_PERSON, 'PersonFragment')

const GET_ALL_PLANETS = createQuery_get_all_object('allPlanets', 'planets', FRAGMENT_PLANET, 'PlanetFragment')
const GET_PLANET = createQuery_get_object('planet', FRAGMENT_PLANET, 'PlanetFragment')

const GET_ALL_SPECIES = createQuery_get_all_object('allSpecies', 'species', FRAGMENT_SPECIES, 'SpeciesFragment')
const GET_SPECIES = createQuery_get_object('species', FRAGMENT_SPECIES, 'SpeciesFragment')

const GET_ALL_STARSHIPS = createQuery_get_all_object('allStarships', 'starships', FRAGMENT_STARSHIP, 'StarshipFragment')
const GET_STARSHIP = createQuery_get_object('starship', FRAGMENT_STARSHIP, 'StarshipFragment')

const GET_ALL_VEHICLES = createQuery_get_all_object('allVehicles', 'vehicles', FRAGMENT_VEHICLE, 'VehicleFragment')
const GET_VEHICLE = createQuery_get_object('vehicle', FRAGMENT_VEHICLE, 'VehicleFragment')

const GET_PLANET_OF_PERSON = createQuery_get_child_in('homeworld', 'person', FRAGMENT_PLANET, 'PlanetFragment')
const GET_PLANET_OF_SPECIES = createQuery_get_child_in('homeworld', 'species', FRAGMENT_PLANET, 'PlanetFragment')
const GET_SPECIES_OF_PERSON = createQuery_get_child_in('species', 'person', FRAGMENT_SPECIES, 'SpeciesFragment')

const GET_STARSHIPS_OF_PERSON = createQuery_get_childAll_in('starships', 'person', 'starshipConnection'
    , FRAGMENT_STARSHIP, 'StarshipFragment')

const GET_VEHICLES_OF_PERSON = createQuery_get_childAll_in('vehicles', 'person', 'vehicleConnection'
    , FRAGMENT_VEHICLE, 'VehicleFragment')

const GET_PERSONS_OF_PLANET = createQuery_get_childAll_in('residents', 'planet', 'residentConnection'
    , FRAGMENT_PERSON, 'PersonFragment')

const GET_PERSONS_OF_SPECIES = createQuery_get_childAll_in('people', 'species', 'personConnection'
    , FRAGMENT_PERSON, 'PersonFragment')

const GET_PERSONS_OF_STARSHIP = createQuery_get_childAll_in('pilots', 'starship', 'pilotConnection'
    , FRAGMENT_PERSON, 'PersonFragment')

const GET_PERSONS_OF_VEHICLE = createQuery_get_childAll_in('pilots', 'vehicle', 'pilotConnection'
    , FRAGMENT_PERSON, 'PersonFragment')

export {  GET_ALL_PEOPLE, GET_PERSON, 
                    GET_ALL_PLANETS, GET_PLANET, 
                    GET_ALL_SPECIES, GET_SPECIES,
                    GET_ALL_STARSHIPS, GET_STARSHIP,
                    GET_ALL_VEHICLES, GET_VEHICLE,
                    GET_PLANET_OF_PERSON, GET_PLANET_OF_SPECIES, GET_SPECIES_OF_PERSON,
                    GET_STARSHIPS_OF_PERSON,
                    GET_VEHICLES_OF_PERSON,
                    GET_PERSONS_OF_PLANET,
                    GET_PERSONS_OF_SPECIES,
                    GET_PERSONS_OF_STARSHIP, GET_PERSONS_OF_VEHICLE
                }
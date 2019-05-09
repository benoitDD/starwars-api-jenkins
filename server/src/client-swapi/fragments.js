import {gql} from 'apollo-server'

const FRAGMENT_PERSON = gql`
    fragment PersonFragment on Person {
        id
        name
        birthYear
        eyeColor
        gender
        hairColor
        height
        mass
        skinColor
    }
`

const FRAGMENT_PLANET = gql`
    fragment PlanetFragment on Planet {
        id
        name
        diameter
        rotationPeriod
        orbitalPeriod
        gravity
        population
        climates
        terrains
        surfaceWater
    }
`

const FRAGMENT_SPECIES = gql`
    fragment SpeciesFragment on Species {
        id
        name
        classification
        designation
        averageHeight
        averageLifespan
        eyeColors
        hairColors
        skinColors
        language
    }
`

const FRAGMENT_STARSHIP = gql`
    fragment StarshipFragment on Starship {
        id
        name
        model
        starshipClass
        manufacturers
        costInCredits
        length
        crew
        passengers
        maxAtmospheringSpeed
        hyperdriveRating
        MGLT
        cargoCapacity
        consumables
    }
`

const FRAGMENT_VEHICLE = gql`
    fragment VehicleFragment on Vehicle {
        id
        name
        model
        vehicleClass
        manufacturers
        costInCredits
        length
        crew
        passengers
        maxAtmospheringSpeed
        cargoCapacity
        consumables
    }
`

export {FRAGMENT_PERSON, FRAGMENT_PLANET, FRAGMENT_SPECIES, FRAGMENT_STARSHIP, FRAGMENT_VEHICLE}
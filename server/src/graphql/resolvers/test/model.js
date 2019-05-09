const objectDB = {_id: '1234', idExternal: '789'}
const objectDBPromise = Promise.resolve(objectDB)

const personSWAPI = { 
    id: 'cGVvcGxlOjE=',
    name: 'Luke Skywalker',
    birthYear: '19BBY',
    eyeColor: 'blue',
    gender: 'male',
    hairColor: 'blond',
    height: 172,
    mass: 77,
    skinColor: 'fair'
}
const personSWAPIPromise = Promise.resolve(personSWAPI)

const planetSWAPI = { 
    id: 'cGxhbmV0czox',
    name: 'Tatooine',
    diameter: 10465,
    rotationPeriod: 23,
    orbitalPeriod: 304,
    gravity: '1 standard',
    population: 200000,
    climates: [ 'arid' ],
    terrains: [ 'desert' ],
    surfaceWater: 1
}
const planetSWAPIPromise = Promise.resolve(planetSWAPI)

const speciesSWAPI = {
    id: 'c3BlY2llczox',
    name: 'Human',
    classification: 'mammal',
    designation: 'sentient',
    averageHeight: 180,
    averageLifespan: 120,
    eyeColors: [ 'brown', 'blue', 'green', 'hazel', 'grey', 'amber' ],
    hairColors: [ 'blonde', 'brown', 'black', 'red' ],
    skinColors: [ 'caucasian', 'black', 'asian', 'hispanic' ],
    language: 'Galactic Basic'
}
const speciesSWAPIPromise = Promise.resolve(speciesSWAPI)

const starshipSWAPI = { 
    id: 'c3RhcnNoaXBzOjI=',
    name: 'CR90 corvette',
    model: 'CR90 corvette',
    starshipClass: 'corvette',
    manufacturers: [ 'Corellian Engineering Corporation' ],
    costInCredits: 3500000,
    length: 150,
    crew: '165',
    passengers: '600',
    maxAtmospheringSpeed: 950,
    hyperdriveRating: 2,
    MGLT: 60,
    cargoCapacity: 3000000,
    consumables: '1 year'
}
const starshipSWAPIPromise = Promise.resolve(starshipSWAPI)

const vehicleSWAPI = { 
    id: 'dmVoaWNsZXM6NA==',
    name: 'Sand Crawler',
    model: 'Digger Crawler',
    vehicleClass: 'wheeled',
    manufacturers: [ 'Corellia Mining Corporation' ],
    costInCredits: 150000,
    length: 36.8,
    crew: '46',
    passengers: '30',
    maxAtmospheringSpeed: 30,
    cargoCapacity: 50000,
    consumables: '2 months'
}
const vehicleSWAPIPromise = Promise.resolve(vehicleSWAPI)

const user = {
    login: 'ben',
    password: '$2b$10$qiBTCxUwzMYs.5Y.zetib.e1dqyryph3QpOmcnXnhnBshfdDRaHZa'
}
const userPromise = Promise.resolve(user)

export {
    objectDB, objectDBPromise,
    personSWAPI, personSWAPIPromise,
    planetSWAPI, planetSWAPIPromise,
    speciesSWAPI, speciesSWAPIPromise,
    starshipSWAPI, starshipSWAPIPromise,
    vehicleSWAPI, vehicleSWAPIPromise,
    user, userPromise
}
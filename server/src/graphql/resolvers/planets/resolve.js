import {resolveImages} from '../commun/resolve'

function resolvePlanet(planet){
    if(!planet){
        return null
    }
    return {
        id: planet.id,
        name: planet.name,
        diameter: planet.diameter,
        rotationPeriod: planet.rotationPeriod,
        orbitalPeriod: planet.orbitalPeriod,
        gravity: planet.gravity,
        population: planet.population,
        climates: planet.climates,
        terrains: planet.terrains,
        surfaceWater: planet.surfaceWater
    }
}

function resolvePlanets(planets){
    if(!planets || !planets.length){
        return []
    }
    return planets.map(resolvePlanet)
}

function resolvePlanetMore(planetDB){
    if(!planetDB){
        return null
    }
    return {
        imagesHeader: resolveImages(planetDB.imagesHeader)
    }
}

export {resolvePlanets, resolvePlanet, resolvePlanetMore}
import {resolveImages} from '../commun/resolve'

function resolveStarship(starship){
    if(!starship){
        return null
    }
    return {
        id: starship.id,
        name: starship.name,
        model: starship.model,
        starshipClass: starship.starshipClass,
        manufacturers: starship.manufacturers,
        costInCredits: starship.costInCredits,
        length: starship.length,
        crew: starship.crew,
        passengers: starship.passengers,
        maxAtmospheringSpeed: starship.maxAtmospheringSpeed,
        hyperdriveRating: starship.hyperdriveRating,
        MGLT: starship.MGLT,
        cargoCapacity: starship.cargoCapacity,
        consumables: starship.consumables
    }
}

function resolveStarships(starships){
    if(!starships || !starships.length){
        return []
    }
    return starships.map(resolveStarship)
}

function resolveStarshipMore(starshipDB){
    if(!starshipDB){
        return null
    }
    return {
        imagesHeader: resolveImages(starshipDB.imagesHeader)
    }
}

export {resolveStarships, resolveStarship, resolveStarshipMore}
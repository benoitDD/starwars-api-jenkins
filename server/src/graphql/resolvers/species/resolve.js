import {resolveImages} from '../commun/resolve'

function resolveSpecies(species){
    return {
        id: species.id,
        name: species.name,
        classification: species.classification,
        designation: species.designation,
        averageHeight: species.averageHeight,
        averageLifespan: species.averageLifespan,
        eyeColors: species.eyeColors,
        hairColors: species.hairColors,
        skinColors: species.skinColors,
        language: species.language
    }
}

function resolveSpeciesMore(speciesDB){
    if(!speciesDB){
        return null
    }
    return {
        imagesHeader: resolveImages(speciesDB.imagesHeader)
    }
}

function resolveSpeciess(speciess){
    if(!speciess || !speciess.length){
        return []
    }
    return speciess.map(resolveSpecies)
}

export {resolveSpeciess, resolveSpecies, resolveSpeciesMore}
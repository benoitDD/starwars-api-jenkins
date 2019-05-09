import {resolveImages} from '../commun/resolve'

function resolvePerson(person){
    return {
        id: person.id,
        name: person.name,
        birthYear: person.birthYear,
        eyeColor: person.eyeColor,
        gender: person.gender,
        hairColor: person.hairColor,
        height: person.height,
        mass: person.mass,
        skinColor: person.skinColor
    }
}

function resolvePersonMore(personDB){
    if(!personDB){
        return null
    }
    return {
        imagesHeader: resolveImages(personDB.imagesHeader)
    }
}

function resolvePersons(people){
    if(!people || !people.length){
        return []
    }
    return people.map(resolvePerson)
}

export {resolvePersons, resolvePerson, resolvePersonMore}
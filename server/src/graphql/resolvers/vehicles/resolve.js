import {resolveImages} from '../commun/resolve'

function resolveVehicle(vehicle){
    if(!vehicle){
        return null
    }
    return {
        id: vehicle.id,
        name: vehicle.name,
        model: vehicle.model,
        vehicleClass: vehicle.vehicleClass,
        manufacturers: vehicle.manufacturers,
        costInCredits: vehicle.costInCredits,
        length: vehicle.length,
        crew: vehicle.crew,
        passengers: vehicle.passengers,
        maxAtmospheringSpeed: vehicle.maxAtmospheringSpeed,
        cargoCapacity: vehicle.cargoCapacity,
        consumables: vehicle.consumables
    }
}

function resolveVehicles(vehicles){
    if(!vehicles || !vehicles.length){
        return []
    }
    return vehicles.map(resolveVehicle)
}

function resolveVehicleMore(vehicleDB){
    if(!vehicleDB){
        return null
    }
    return {
        imagesHeader: resolveImages(vehicleDB.imagesHeader)
    }
}

export {resolveVehicles, resolveVehicle, resolveVehicleMore}
const queryVehicles = `
    allVehicles(pageSize: Int, after: String, before: String):AllVehiclesResponse!
    vehicle(id:ID!): Vehicle
`

const typesVehicles = `
type AllVehiclesResponse{
    startCursor: String
    endCursor: String
    totalCount: Int!
    vehicles:[Vehicle]!
}

type Vehicle{
    id: ID!
    name: String!
    model: String
    vehicleClass: String
    manufacturers: [String]
    costInCredits: Float
    length: Float
    crew: String
    passengers: String
    maxAtmospheringSpeed: Int
    cargoCapacity: Float
    consumables: String
    vehicleMore: VehicleMore
    persons(pageSize: Int, after: String, before: String):AllPersonsResponse!
}

type VehicleMore {
    imagesHeader(first: Boolean): [Image]
}
`

export {queryVehicles, typesVehicles}
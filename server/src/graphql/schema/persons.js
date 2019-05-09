const queryPersons = `
    allPersons(pageSize: Int, after: String, before: String):AllPersonsResponse!
    person(id:ID!): Person
`

const typesPersones = `
type AllPersonsResponse{
    startCursor: String
    endCursor: String
    totalCount: Int!
    persons:[Person]!
}

type Person{
    id: ID!
    name: String!
    birthYear: String
    eyeColor: String
    gender: String
    hairColor: String
    height: Int
    mass: Float
    skinColor: String
    homeworld: Planet
    species: Species
    personMore: PersonMore
    starships(pageSize: Int, after: String, before: String):AllStarshipsResponse!
    vehicles(pageSize: Int, after: String, before: String):AllVehiclesResponse!
}

type PersonMore{
    imagesHeader(first: Boolean): [Image]
}
`

export {queryPersons, typesPersones}
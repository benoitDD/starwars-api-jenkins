const queryStarships = `
    allStarships(pageSize: Int, after: String, before: String):AllStarshipsResponse!
    starship(id:ID!): Starship
`

const typesStarships = `
type AllStarshipsResponse{
    startCursor: String
    endCursor: String
    totalCount: Int!
    starships:[Starship]!
}

type Starship{
    id: ID!
    name: String!
    model: String
    starshipClass: String
    manufacturers: [String]
    costInCredits: Float
    length: Float
    crew: String
    passengers: String
    maxAtmospheringSpeed: Int
    hyperdriveRating: Float
    MGLT: Int
    cargoCapacity: Float
    consumables: String
    starshipMore: StarshipMore
    persons(pageSize: Int, after: String, before: String):AllPersonsResponse!
}

type StarshipMore {
    imagesHeader(first: Boolean): [Image]
}
`

export {queryStarships, typesStarships}
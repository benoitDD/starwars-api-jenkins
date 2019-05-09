const queryPlanets = `
    allPlanets(pageSize: Int, after: String, before: String):AllPlanetsResponse!
    planet(id:ID!): Planet
`

const typesPlanets = `
type AllPlanetsResponse{
    startCursor: String
    endCursor: String
    totalCount: Int!
    planets:[Planet]!
}

type Planet{
    id: ID!
    name: String!
    diameter: Int
    rotationPeriod: Int
    orbitalPeriod: Int
    gravity: String
    population: Float
    climates: [String]
    terrains: [String]
    surfaceWater: Float
    persons(pageSize: Int, after: String, before: String):AllPersonsResponse!
    planetMore: PlanetMore
}

type PlanetMore {
    imagesHeader(first: Boolean): [Image]
}
`

export {queryPlanets, typesPlanets}
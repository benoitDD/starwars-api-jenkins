const querySpecies = `
    allSpecies(pageSize: Int, after: String, before: String):AllSpeciesResponse!
    species(id:ID!): Species
`

const typesSpecies = `
type AllSpeciesResponse{
    startCursor: String
    endCursor: String
    totalCount: Int!
    species:[Species]!
}

type Species{
    id: ID!
    name: String!
    classification: String
    designation: String
    averageHeight: Float
    averageLifespan: Int
    eyeColors: [String]
    hairColors: [String]
    skinColors: [String]
    language: String
    homeworld: Planet
    speciesMore: SpeciesMore
    persons(pageSize: Int, after: String, before: String):AllPersonsResponse!
}

type SpeciesMore{
    imagesHeader(first: Boolean): [Image]
}
`

export {querySpecies, typesSpecies}
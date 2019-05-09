const fragmentImage = `
    filename: String
    title: String
    description: String
`

const typesCommun = `
type Image{
    _id: ID!
    ${fragmentImage}
}

input InputImage{
    ${fragmentImage}
    file: Upload!
}

input InputAddImage{
    idExternal: ID!
    type: Type!
    imageHeader: InputImage!
}

input InputRemoveImage{
    idExternal: ID!
    type: Type!
    idImage: ID!
}

enum Type {
    person
    planet
    species
    starship
    vehicle
}

type ResponseObject{
    success: Boolean!
    message: String
    details: [DetailError]
    person: Person
    planet: Planet
    species: Species
    starship: Starship
    vehicle: Vehicle
}

type DetailError{
    key: String
    message: String
}

union SearchResult = Person | Planet | Species | Starship | Vehicle

type ResponseSign{
    success: Boolean!
    message: String
    token: String
    details: [DetailError]
    user: User
}

type User{
    login: String!
}
`

const mutationsCommun = `
    addImage(inputAddImage: InputAddImage!):ResponseObject
    removeImage(inputRemoveImage: InputRemoveImage!):ResponseObject
    signUp(login: String!, password: String!):ResponseSign!
`

const queryCommun = `
    search(text: String!): [SearchResult]!
    signIn(login: String!, password: String!):ResponseSign!
    reloadSignIn:ResponseSign!
    signOut: ResponseSign!
`

export {typesCommun, mutationsCommun, queryCommun}
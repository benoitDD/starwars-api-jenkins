import {queryPersons, typesPersones} from './persons'
import {queryPlanets, typesPlanets} from './planets'
import {querySpecies, typesSpecies} from './species'
import {queryStarships, typesStarships} from './starships'
import {queryVehicles, typesVehicles} from './vehicles'
import {queryCommun, typesCommun, mutationsCommun} from './commun'

const typeDefs = `
type Query{
    ${queryPersons}
    ${queryPlanets}
    ${querySpecies}
    ${queryStarships}
    ${queryVehicles}
    ${queryCommun}
}

${typesPersones}
${typesPlanets}
${typesCommun}
${typesSpecies}
${typesStarships}
${typesVehicles}

type Mutation {
    ${mutationsCommun}
}
`

export default typeDefs
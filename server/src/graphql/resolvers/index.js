import resolversPersons from './persons'
import resolversPlanets from './planets'
import resolversCommun from './commun'
import resolversSpecies from './species'
import resolversStarships from './starships'
import resolversVehicles from './vehicles'

const resolvers = createResolvers(resolversPersons, resolversPlanets, resolversCommun
    , resolversSpecies, resolversStarships, resolversVehicles)

function createResolvers(...args){
    var resolvers = {}
    args.forEach(resolver => {
        if(resolver.Query){
            resolvers.Query = {...resolvers.Query, ...resolver.Query}
        }
        if(resolver.Type){
            resolvers = {...resolvers, ...resolver.Type}
        }
        if(resolver.Mutation){
            resolvers.Mutation = {...resolvers.Mutation, ...resolver.Mutation}
        }
    })
    return resolvers
}

export default resolvers
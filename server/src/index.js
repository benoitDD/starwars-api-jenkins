import {ApolloServer} from 'apollo-server-express'
import {typeDefs, resolvers} from './graphql'
import express from 'express'
import {connectDatabase} from './database/connect'
import databasePerson from './database/persons'
import databasePlanet from './database/planets'
import databaseSpecies from './database/species'
import databaseStarship from './database/starships'
import databaseVehicle from './database/vehicles'
import databaseUser from './database/users'
import clientApolloStarWars from './client-swapi'
import i18nextMiddleware from 'i18next-express-middleware'
import i18n from './i18n'
import cors from 'cors'
import {getLogin, signIn} from './authentification'

const server = new ApolloServer({
    context: ({ req }) => {
      return getLogin(req.headers)
      .then(({login, error}) => {
        return {
          login,
          signIn,
          i18n: req.i18n,
          errorAuth: error
        }
      })
    },
    typeDefs,
    resolvers,
    dataSources: () => ({
      clientApolloStarWars,
      databasePerson,
      databasePlanet,
      databaseSpecies,
      databaseStarship,
      databaseVehicle,
      databaseUser
    })
})

const app = express()

var corsOptions = {
  origin: process.env.CORS_ORIGIN,
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use(i18nextMiddleware.handle(i18n))
server.applyMiddleware({app})

app.use(express.static(__dirname + '/../public'))

const port = process.env.PORT || 4000
app.listen({port}, () =>{
    connectDatabase()
    .then(() => (
      console.log(`Server in mode ${process.env.NODE_ENV}, ready at http://localhost:${port}${server.graphqlPath}`)
    ))
    .catch(err => (
      console.log('Error while connection to the database:', err)
    ))
    
  }
)
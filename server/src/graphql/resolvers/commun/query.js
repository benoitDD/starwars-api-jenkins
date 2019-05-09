import {searchIn} from './search'
import bcrypt from 'bcrypt'

function addType(array, type){
    return  array.map(
        objet => ({...objet, _type: type})
    )
}

const Query = {
    search: (_,{text}, {dataSources}) => {
        return dataSources.clientApolloStarWars.getAllObjectsForSearch()
        .then(({persons, planets, species, starships, vehicles}) => {
            return []
            .concat(
                addType(searchIn(persons, text), 'Person'),
                addType(searchIn(planets, text), 'Planet'),
                addType(searchIn(species, text), 'Species'),
                addType(searchIn(starships, text), 'Starship'),
                addType(searchIn(vehicles, text), 'Vehicle')
            )
        })
    },
    signIn: (_, {login, password}, { dataSources, signIn, i18n }) => {
        return dataSources.databaseUser.findByLogin(login)
        .then(user => {
            if(!user){
                return {
                    success: false,
                    message: i18n.t('Login or password is incorrect')
                }
            }
            return bcrypt.compare(password, user.password)
            .then(function(match) {
                if(!match){
                    return {
                        success: false,
                        message: i18n.t('Login or password is incorrect')
                    }
                }
                const token = signIn(login)
                return {
                    success: true,
                    token,
                    user
                }
            })
        })
    },
    reloadSignIn: (_, __, { dataSources, login }) => {
        if(login){
            return {
                success: true,
                user: {
                    login
                }
            }
        }else{
            return {
                success: false
            }
        }
    },
    signOut: (_, __, { dataSources, signOut }) => {
        return {
            success: true
        }
    }
}

export default Query
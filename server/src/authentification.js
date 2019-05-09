import jwt from 'jsonwebtoken'
import {ApolloError} from 'apollo-server-express'

const privateKeyToken = process.env.PRIVATE_KEY_TOKEN || 'shhhhhhh'

const signIn = name => {
    return jwt.sign({ login: name }, privateKeyToken, { expiresIn: '1d' })
}

function getLogin(headers){
    const token = headers.authorization || undefined
    return new Promise((resolve, reject) => {
        if(!token){
            return resolve({})
        }
        jwt.verify(token, privateKeyToken, function(err, decoded) {
            if(err){
                if(err.name === 'TokenExpiredError'){
                    resolve({error: new ApolloError('token expired', 'TOKEN_EXPIRED')})
                }else {
                    resolve({})
                }
            }else{
                resolve({login: decoded.login})
            }
        })
    })
}

export {getLogin, signIn}
import {stringEmpty, Response} from '../utils/utils'
import {returnError, getOrCreateObject, returnObjectFull, addImage, getDataBaseObject} from './utils'
import {uploadImage} from './images'
import bcrypt from 'bcrypt'

const Mutation = {
    addImage : (_,{inputAddImage}, { dataSources, i18n }) => {
        var response = new Response()
        var image = inputAddImage.imageHeader
        if(stringEmpty(image.title)){
            response.addDetailsError('title', i18n.t('A title must be fill'))
        }
        if(!response.success){
            return response
        }
        return Promise.all([
            image.file.then(uploadImage(i18n)), 
            getOrCreateObject(inputAddImage.type, inputAddImage.idExternal, dataSources)
        ])
        .then(([filename, objectDB]) => {
            const newImage = {
                filename,
                title: image.title,
                description: image.description,
            }
            return addImage(inputAddImage.type, objectDB.idExternal, newImage, dataSources)
        })
        .then(returnObjectFull(inputAddImage.type, dataSources, i18n))
        .catch(returnError)
    },
    removeImage : (_,{inputRemoveImage}, { dataSources }) => {
        return Promise.resolve()
        .then(() => {
            return getDataBaseObject(inputRemoveImage.type, dataSources)
            .removeImage(inputRemoveImage.idExternal, inputRemoveImage.idImage)
        })
        .then(returnObjectFull(inputRemoveImage.type, dataSources))
        .catch(returnError)
    }
    ,signUp: (_, {login, password}, { dataSources, i18n }) => {
        return dataSources.databaseUser.findByLogin(login)
        .then(user => {
            if(user){
                return {
                    success: false,
                    message: i18n.t('Login exist!')
                }
            }
            return bcrypt.hash(password, 10)
            .then(hashPassword => {
                return dataSources.databaseUser.add({
                    login,
                    password: hashPassword
                })
            })
            .then(user => ({success: true, user}))
        })
    }
}

export default Mutation
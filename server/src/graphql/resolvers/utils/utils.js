import { AuthenticationError } from 'apollo-server'

function arrayEmpty(array){
    return !array || !array.length
}

function stringEmpty(string){
    return !string || !string.length
}

class Response {
    constructor(){
        this.success = true
    }

    setMessageError(message){
        this.success = false
        this.message = message
    }

    addDetailsError(key, message){
        this.success = false
        if(!this.details){
            this.details = []
        }
        this.details.push({key, message})
    }
}

function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
}

function resolverPrivate(resolver){
    return function(parent, args, context, info){
        if(!context.login){
            if(context.errorAuth){
                throw context.errorAuth
            }
            throw new AuthenticationError('must authenticate')
        }
        return resolver(parent, args, context, info)
    }
}

function resolversPrivate(resolvers){
    var res = {}
    Object.keys(resolvers).map(function(key) {
        res[key] = resolverPrivate(resolvers[key])
    })
    return res
}

export {arrayEmpty, stringEmpty, Response, validURL, resolverPrivate, resolversPrivate}
import {findObjectByIdExternal, addObject,
    getOrCreateObject, removeImage, addImage} from './modelObject'

class CommunObject {
    constructor(type){
        this.type = type
    }

    addObject(object) {
        object.type = this.type
        return addObject(object)
    }
    
    findObjectByIdExternal(idExternal){
        return findObjectByIdExternal(idExternal)
    }
    
    getOrCreateObject(idExternal){
        return getOrCreateObject(idExternal, this.type)
    }

    addImage(idExternal, image){
        return addImage(idExternal, image)
    }

    removeImage(idExternal, idImage){
        return removeImage(idExternal, idImage)
    }
}

export default CommunObject
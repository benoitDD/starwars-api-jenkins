import CommunObject from './communObject'

class Person extends CommunObject{
    constructor(){
        super('Person')
    }
}

const person = new Person()

export default person
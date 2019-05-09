import CommunObject from './communObject'

class Vehicle extends CommunObject{
    constructor(){
        super('Vehicle')
    }
}

const vehicle = new Vehicle()

export default vehicle
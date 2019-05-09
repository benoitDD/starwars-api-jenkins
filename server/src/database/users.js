import {findByLogin, addUser} from './modelUser'

class User {
    findByLogin(login){
        return findByLogin(login)
    }

    add(user){
        return addUser(user)
    }
}

const user = new User()

export default user
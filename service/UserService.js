const UserModel = require('../models/user/User')
const user = new UserModel();


export default class UserService() {

    async CreateUser(user){
        const userRecord = await UserModel(user);
        const bioRecord 
    }
}
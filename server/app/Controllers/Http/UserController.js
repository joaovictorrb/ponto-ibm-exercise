'use strict'

const UserModel = use('App/Models/User')

class UserController {
  async createUser({ request, response }) {
    const data = request.only(["username", "email", "password"]);
    
    const createUser = await UserModel.create(data);
    
    return createUser;
  }
}

module.exports = UserController

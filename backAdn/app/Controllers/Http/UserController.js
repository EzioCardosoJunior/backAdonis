'use strict'

const User = use('App/Models/User')

class UserController {
  async index ({ response }) {
    const users = await User.all()
    return response.json(users)
  }

  async store ({ request, response }) {
    const userData = request.only(['username', 'email', 'password'])
    const user = await User.create(userData)
    return response.status(201).json(user)
  }
}

module.exports = UserController

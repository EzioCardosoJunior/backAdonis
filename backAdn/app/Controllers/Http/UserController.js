'use strict'

const User = use('App/Models/User')

class UserController {
  async store({ request, response }) {
    const data = request.only(['username', 'email', 'password'])
    const user = await User.create(data)
    return response.status(201).json(user)
  }

  async index({ response }) {
    const users = await User.all()
    return response.json(users)
  }
}

module.exports = UserController

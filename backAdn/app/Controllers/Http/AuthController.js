'use strict'

const User = use('App/Models/User')

class AuthController {
  async register ({ request, auth, response }) {
    const { email, password, username } = request.only(['email', 'password', 'username'])
    const user = await User.create({ email, password, username })
    const token = await auth.generate(user)
    return response.json({ user, token })
  }

  async login ({ request, auth, response }) {
    const { email, password } = request.only(['email', 'password'])
    const token = await auth.attempt(email, password)
    return response.json({ token })
  }
}

module.exports = AuthController

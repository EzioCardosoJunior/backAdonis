'use strict'

module.exports = {
  authenticator: 'jwt', // ou 'session' se preferir usar sessões

  session: {
    serializer: 'lucid',
    model: 'App/Models/User',
    scheme: 'session',
    uid: 'email',
    password: 'password'
  },

  jwt: {
    serializer: 'lucid',
    model: 'App/Models/User',
    scheme: 'jwt',
    uid: 'email',
    password: 'password',
    options: {
      secret: 'self::app.appKey'
    }
  }
}

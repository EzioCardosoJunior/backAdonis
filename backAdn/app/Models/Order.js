'use strict'

const Model = use('Model')

class Order extends Model {
  items () {
    return this.hasMany('App/Models/OrderItem')
  }
}

module.exports = Order

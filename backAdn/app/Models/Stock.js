'use strict'

const Model = use('Model')

class Stock extends Model {
  product () {
    return this.belongsTo('App/Models/Product')
  }
}

module.exports = Stock

'use strict'

const Model = use('Model')

class Product extends Model {
  subgroup () {
    return this.belongsTo('App/Models/ProductSubgroup', 'subgroup_id', 'id')
  }
}

module.exports = Product

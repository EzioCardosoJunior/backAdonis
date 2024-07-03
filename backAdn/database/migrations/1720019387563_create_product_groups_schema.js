'use strict'

const Schema = use('Schema')

class ProductGroupsTableSchema extends Schema {
  up () {
    this.create('product_groups', (table) => {
      table.increments()
      table.string('name', 255).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('product_groups')
  }
}

module.exports = ProductGroupsTableSchema

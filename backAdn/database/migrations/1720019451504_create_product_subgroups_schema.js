'use strict'

const Schema = use('Schema')

class ProductSubgroupsTableSchema extends Schema {
  up () {
    this.create('product_subgroups', (table) => {
      table.increments()
      table.integer('group_id').unsigned().references('id').inTable('product_groups').onDelete('CASCADE')
      table.string('name', 255).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('product_subgroups')
  }
}

module.exports = ProductSubgroupsTableSchema

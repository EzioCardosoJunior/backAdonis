'use strict'

const Schema = use('Schema')

class ProductsTableSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.integer('subgroup_id').unsigned().references('id').inTable('product_subgroups').onDelete('CASCADE')
      table.string('name', 255).notNullable()
      table.text('description')
      table.decimal('price', 10, 2).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductsTableSchema

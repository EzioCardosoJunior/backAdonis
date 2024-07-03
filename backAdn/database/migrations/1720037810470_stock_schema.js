'use strict'

const Schema = use('Schema')

class StockTableSchema extends Schema {
  up () {
    this.create('stocks', (table) => {
      table.increments()
      table.integer('product_id').unsigned().references('id').inTable('products').onDelete('CASCADE')
      table.integer('quantity').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('stocks')
  }
}

module.exports = StockTableSchema

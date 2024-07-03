'use strict'

const Schema = use('Schema')

class OrdersTableSchema extends Schema {
  up () {
    this.create('orders', (table) => {
      table.increments()
      table.string('customer_name', 255).notNullable()
      table.string('customer_code', 80).notNullable()
      table.date('order_date').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('orders')
  }
}

module.exports = OrdersTableSchema

'use strict'

const Order = use('App/Models/Order')
const Stock = use('App/Models/Stock')

class OrderController {
  async store ({ request, response }) {
    const { customer_name, customer_code, order_date, items } = request.only(['customer_name', 'customer_code', 'order_date', 'items'])

    const order = new Order()
    order.customer_name = customer_name
    order.customer_code = customer_code
    order.order_date = order_date
    await order.save()

    for (const item of items) {
      const stock = await Stock.findBy('product_id', item.product_id)

      if (!stock) {
        return response.status(404).send({ error: `Produto com ID ${item.product_id} não encontrado no estoque.` })
      }

      if (stock.quantity < item.quantity) {
        return response.status(400).send({ error: `Estoque insuficiente para o produto com ID ${item.product_id}.` })
      }

      await order.items().create({
        product_id: item.product_id,
        quantity: item.quantity
      })

      stock.quantity -= item.quantity
      await stock.save()
    }

    return response.status(201).json(order)
  }
}

module.exports = OrderController

'use strict'

const Order = use('App/Models/Order')
const OrderItem = use('App/Models/OrderItem')

class OrderController {
  async store ({ request, response }) {
    const { customer_name, customer_code, order_date, items } = request.only(['customer_name', 'customer_code', 'order_date', 'items'])

    const order = new Order()
    order.customer_name = customer_name
    order.customer_code = customer_code
    order.order_date = order_date
    await order.save()

    for (let item of items) {
      const orderItem = new OrderItem()
      orderItem.order_id = order.id
      orderItem.item_name = item.item_name
      orderItem.quantity = item.quantity
      orderItem.price = item.price
      await orderItem.save()
    }

    return response.status(201).json(order)
  }

  async index ({ response }) {
    const orders = await Order.query().with('items').fetch()
    return response.json(orders)
  }
}

module.exports = OrderController

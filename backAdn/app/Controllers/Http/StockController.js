'use strict'

const Stock = use('App/Models/Stock')
const Product = use('App/Models/Product')

class StockController {
  async addStock ({ request, response }) {
    const { product_id, quantity } = request.only(['product_id', 'quantity'])

    // Verifica se o produto existe
    const product = await Product.find(product_id)
    if (!product) {
      return response.status(404).json({ message: 'Produto não encontrado' })
    }

    // Verifica se já existe um estoque para este produto
    let stock = await Stock.findBy('product_id', product_id)
    if (stock) {
      stock.quantity += quantity
    } else {
      stock = new Stock()
      stock.product_id = product_id
      stock.quantity = quantity
    }

    await stock.save()
    return response.status(200).json(stock)
  }

  async index ({ response }) {
    const stocks = await Stock.query().with('product').fetch()
    return response.status(200).json(stocks)
  }
}

module.exports = StockController

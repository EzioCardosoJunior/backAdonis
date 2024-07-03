'use strict'

const Product = use('App/Models/Product')
const Stock = use('App/Models/Stock')

class ProductController {
  async store ({ request, response }) {
    const { name, description, price, subgroup_id, initial_quantity } = request.only(['name', 'description', 'price', 'subgroup_id', 'initial_quantity'])

    const product = new Product()
    product.name = name
    product.description = description
    product.price = price
    product.subgroup_id = subgroup_id
    await product.save()

    // Adicionar produto ao estoque com quantidade inicial
    const stock = new Stock()
    stock.product_id = product.id
    stock.quantity = initial_quantity || 0  // Inicializa com 0 ou quantidade inicial fornecida
    await stock.save()

    return response.status(201).json(product)
  }

  async index ({ response }) {
    const products = await Product.query().with('subgroup').fetch()
    return response.json(products)
  }
}

module.exports = ProductController

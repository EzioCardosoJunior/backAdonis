'use strict'

const Product = use('App/Models/Product')
const ProductSubgroup = use('App/Models/ProductSubgroup')
const ProductGroup = use('App/Models/ProductGroup')

class ProductController {
  async store ({ request, response }) {
    const { name, description, price, subgroup_id } = request.only(['name', 'description', 'price', 'subgroup_id'])

    const product = new Product()
    product.name = name
    product.description = description
    product.price = price
    product.subgroup_id = subgroup_id
    await product.save()

    return response.status(201).json(product)
  }

  async index ({ response }) {
    const products = await Product.query().with('subgroup').fetch()
    return response.json(products)
  }
}

module.exports = ProductController

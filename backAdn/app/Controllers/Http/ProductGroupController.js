'use strict'

const ProductGroup = use('App/Models/ProductGroup')

class ProductGroupController {
  async store ({ request, response }) {
    const { name } = request.only(['name'])

    const productGroup = new ProductGroup()
    productGroup.name = name
    await productGroup.save()

    return response.status(201).json(productGroup)
  }

  async index ({ response }) {
    const productGroups = await ProductGroup.all()
    return response.json(productGroups)
  }
}

module.exports = ProductGroupController

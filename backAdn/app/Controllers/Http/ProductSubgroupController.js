'use strict'

const ProductSubgroup = use('App/Models/ProductSubgroup')

class ProductSubgroupController {
  async store ({ request, response }) {
    console.log(request)
    const { group_id, group_name, name } = request.only(['group_id', 'name'])

    const productSubgroup = new ProductSubgroup()
    productSubgroup.group_id = group_id
    productSubgroup.name = name
    await productSubgroup.save()

    return response.status(201).json(productSubgroup)
  }

  async index ({ response }) {
    const productSubgroups = await ProductSubgroup.all()
    return response.json(productSubgroups)
  }
}

module.exports = ProductSubgroupController

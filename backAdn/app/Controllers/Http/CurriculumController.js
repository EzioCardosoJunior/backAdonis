'use strict'

const Curriculum = use('App/Models/Curriculum')

class CurriculumController {
  async index ({ params, response }) {
    const curriculums = await Curriculum.query().where('user_id', params.id).fetch()
    return response.json(curriculums)
  }

  async store ({ auth, request, response }) {
    const user = await auth.getUser()
    const curriculumData = request.only(['title', 'description'])
    const curriculum = new Curriculum()
    curriculum.fill(curriculumData)
    await user.curriculums().save(curriculum)
    return response.status(201).json(curriculum)
  }
}

module.exports = CurriculumController

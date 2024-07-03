'use strict'

const Curriculum = use('App/Models/Curriculum')

class CurriculumController {
    async index({ params, response }) {
        try {
            const userId = params.id
            const curriculums = await Curriculum.query().where('user_id', userId).fetch()
            return response.json(curriculums)
        } catch (error) {
            return response.status(500).send({ error: 'Erro ao listar currículos do usuário.' })
        }
    }

    async store({ request, response }) {
        try {
            const curriculumData = request.only(['title', 'description', 'user_id'])
            const curriculum = new Curriculum()
            curriculum.fill(curriculumData)
            await curriculum.save()
            return response.status(201).json(curriculum)
        } catch (error) {
            return response.status(500).send({ error: 'Erro ao cadastrar currículo.' })
        }
    }
}

module.exports = CurriculumController

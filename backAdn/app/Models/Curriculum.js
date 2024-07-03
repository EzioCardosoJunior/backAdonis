'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Curriculum extends Model {
    static get table () {
      return 'curriculums'
    }
  }
  

module.exports = Curriculum

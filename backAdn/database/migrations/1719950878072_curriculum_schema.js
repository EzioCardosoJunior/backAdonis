'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CurriculumSchema extends Schema {
  up () {
    this.create('curriculums', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.string('title').notNullable()
      table.text('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('curriculums')
  }
}

module.exports = CurriculumSchema

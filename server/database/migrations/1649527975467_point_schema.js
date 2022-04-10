'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PointSchema extends Schema {
	up() {
		this.create('points', (table) => {
			table.increments('pointId').unique().primary(true)
			table.integer('userId').unsigned().references('userId').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
			table.datetime('dateHourInit')
			table.datetime('dateHourEnd')
			table.boolean('hoursExceeded').notNullable().default(false)

			table.timestamps()
		})
	}

	down() {
		this.drop('points')
	}
}

module.exports = PointSchema

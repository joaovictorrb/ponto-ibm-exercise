'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PointSchema extends Schema {
	up() {
		this.create('points', (table) => {
			table.increments('pointId').unique().primary(true)
			table
				.integer('user_id')
				.unsigned()
				.references('userId')
				.inTable('users')
				.onUpdate('CASCADE')
				.onDelete('CASCADE')
			table.string('date')
			table.string('unixTimeStamp')
			table.timestamps()
		})
	}

	down() {
		this.drop('points')
	}
}

module.exports = PointSchema

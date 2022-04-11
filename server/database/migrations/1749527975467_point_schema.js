'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PointSchema extends Schema {
	up() {
		this.create('points', (table) => {
			table.increments('pointId').unique().primary(true)
			table
				.integer('registryId')
				.unsigned()
				.references('registryId')
				.inTable('registries')
				.onUpdate('CASCADE')
				.onDelete('CASCADE')
			table.string('date')
			table.string('hourInit')
			table.string('hourEnd')
			table.timestamps()
		})
	}

	down() {
		this.drop('points')
	}
}

module.exports = PointSchema

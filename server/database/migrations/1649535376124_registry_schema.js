'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RegistrySchema extends Schema {
	up() {
		this.create('registries', (table) => {
			table.increments()
			table.integer('userId').unsigned().references('userId').inTable('users')
			table.integer('pointId').unsigned().references('pointId').inTable('points')
			table.boolean('hoursExceeded').notNullable().default(false)
			table.timestamps()
		})
	}

	down() {
		this.drop('registries')
	}
}

module.exports = RegistrySchema

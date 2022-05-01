'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RegistrySchema extends Schema {
	up() {
		this.create('registries', (table) => {
			table.increments('registryId').primary(true)
			table
				.integer('user_id')
				.unsigned()
				.references('userId')
				.inTable('users')
				.onUpdate('CASCADE')
				.onDelete('CASCADE')
			table.string('registryReferalDate')
			table.string('referalMonth')
			table.boolean('hoursExceeded').notNullable().default(false)
			table.float('avaliableHours')
			table.timestamps()
		})
	}

	down() {
		this.drop('registries')
	}
}

module.exports = RegistrySchema

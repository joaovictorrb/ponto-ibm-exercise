'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Registry extends Model {
	static get connection() {
		return 'mysql'
	}

	static get table() {
		return 'registries'
	}

	static get primaryKey() {
		return 'registryId'
	}

	user() {
		return this.belongsTo('App/Models/User')
	}
}

module.exports = Registry

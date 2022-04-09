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

	users() {
		return this.hasMany('App/Models/User')
	}

	points() {
		return this.hasMany('App/Models/Point')
	}
}

module.exports = Registry

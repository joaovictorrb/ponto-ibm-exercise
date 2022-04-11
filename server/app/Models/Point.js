'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Point extends Model {
	static get connection() {
		return 'mysql'
	}

	static get table() {
		return 'points'
	}

	static get primaryKey() {
		return 'pointId'
	}

	registry() {
		return this.belongsTo('App/Models/Registry')
	}
}

module.exports = Point

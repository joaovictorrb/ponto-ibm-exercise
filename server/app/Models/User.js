'use strict'

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class User extends Model {
	static boot() {
		super.boot()

		/**
     * A hook to hash the user password before saving
     * it to the database.
     */
		this.addHook('beforeSave', async (userInstance) => {
			if (userInstance.dirty.password) {
				userInstance.password = await Hash.make(userInstance.password)
			}
		})
	}

	/**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
	tokens() {
		return this.hasMany('App/Models/Token')
	}

	registries() {
		return this.hasMany('App/Models/Registry')
	}

	points() {
		return this.hasMany('App/Models/Point')
	}

	static get hidden() {
		return [ 'password' ]
	}

	static get table() {
		return 'users'
	}

	static get primaryKey() {
		return 'userId'
	}
}

module.exports = User

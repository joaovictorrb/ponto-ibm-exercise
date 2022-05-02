'use strict'

/*
|--------------------------------------------------------------------------
| RegistrySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')
class RegistrySeeder {
	async run() {
		await Database.table('registries').insert({
			user_id: 1,
			registryReferalDate: '2022-04-12',
			referalMonth: 'abril',
			hoursExceeded: 1,
			avaliableHours: 0.22
		})
	}
}

module.exports = RegistrySeeder

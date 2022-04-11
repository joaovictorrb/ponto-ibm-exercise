'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use("Database");
class UserSeeder {
  async run () {
    await Database.table("users").insert({
      username: "Student",
      email: "student@gmail.com",
      password: "$2a$10$pUxE8dq9r.usucVlsLwaz.6MHOKMJ421b5EswBOhOZcY1Mj9kC9Ti",
    });
  }
}

module.exports = UserSeeder

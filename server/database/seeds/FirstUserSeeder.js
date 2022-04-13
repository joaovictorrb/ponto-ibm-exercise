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
      username: "usern",
      email: "usern@gmail.com",
      password: "$2a$10$PR8QuGt3ildEofR9fT1YSejw3xb3S1l6A01C0a1kY42jhg5E/yvYm",
      created_at: "2022-04-12 23:25:17",
      updated_at: "2022-04-12 23:25:17"
    });
  }
}

module.exports = UserSeeder

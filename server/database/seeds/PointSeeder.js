'use strict'

/*
|--------------------------------------------------------------------------
| PointSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use("Database");

class PointSeeder {
  async run () {
    await Database.table("points").insert({
      user_id: 1,
      date: "2022-11-04",
      hour: "08:00",
      unixTimeStampMilli: 1649674800000
    });
    await Database.table("points").insert({
      user_id: 1,
      date: "2022-11-04",
      hour: "12:32",
      unixTimeStampMilli: 1649691120000
    });
    await Database.table("points").insert({
      user_id: 1,
      date: "2022-11-04",
      hour: "14:00",
      unixTimeStampMilli: 1649696455000
    });
    await Database.table("points").insert({
      user_id: 1,
      date: "2022-11-04",
      hour: "17:50",
      unixTimeStampMilli: 1649710220000
    });
  }
}

module.exports = PointSeeder

'use strict'

const PointModel = use('App/Models/Point')
const Response = require('@adonisjs/session/src/VowBindings/Response')
const moment = require('moment')

class PointController {
	async newPoint({ params, request, response }) {
		let { dateHourUnix } = request.only("dateHour")
		dateHourUnix = dateHourUnix*1000

		let date = moment(dateHourUnix).utc().format('YYYY-MM-DD')
 
		const storePoint = await PointModel.create({
			user_id: params.userId,
			date,
			unixTimeStamp: dateHourUnix
		})

		if(!storePoint) return "Erro"

		return storePoint
	}
}

module.exports = PointController

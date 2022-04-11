'use strict'

const PointModel = use('App/Models/Point')
const UserModel = use('App/Models/User')
const moment = require('moment')

class PointController {
	async newPoint({ params, request, response }) {
		const unixTimeStampMilli = Date.now()

		const date = moment(unixTimeStampMilli).utc().format('YYYY-MM-DD')

		const hour = moment(unixTimeStampMilli).utc().format('HH:mm')

		const storePoint = await PointModel.create({
			user_id: params.userId,
			date,
			hour,
			unixTimeStampMilli
		})

		if(!storePoint) return response.status(500).send(
			{ error: 
				{ message: 'Alguma coisa deu errado ao tentar marcar o ponto', name: 'Internal Serve Error', status: 500 } 
			})

		 return response.status(201).send(
			{ message: 'Ponto criado com sucesso', name: 'Created', status: 201 } 
)
	}

	async showPoints({params, request, response}) {
		const user = await UserModel.find(params.userId)
		let getDailyPoints = (await user.points().fetch()).toJSON()

		return getDailyPoints
	}
}

module.exports = PointController

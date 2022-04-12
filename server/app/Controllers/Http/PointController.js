'use strict'

const PointModel = use('App/Models/Point')
const UserModel = use('App/Models/User')
const moment = require('moment')

class PointController {
	async newPoint({ params, request, response }) {
		const unixTimeStampMilli = Date.now()
		let flagIsEntryPoint = true
		const user_id = params.userId
		const user = await UserModel.find(user_id)

		const date = moment(unixTimeStampMilli).utc().format('YYYY-MM-DD')
		const hour = moment(unixTimeStampMilli).utc().format('HH:mm')

		const storePoint = await PointModel.create({
			user_id,
			date,
			hour,
			unixTimeStampMilli
		})

		if(!storePoint) return response.status(500).send(
			{ error: 
				{ message: 'Alguma coisa deu errado ao tentar marcar o ponto', name: 'Internal Serve Error', status: 500 } 
			}
		)

		const getDailyPoints = (await user.points().where("date", date).fetch()).toJSON()
		if(getDailyPoints.length%2==0) flagIsEntryPoint = false 

		return response.status(201).send(
			{ flagIsEntryPoint ,message: 'Ponto criado com sucesso', name: 'Created', status: 201 } )
	}

	async showPoints({params, request, response}) {
		const user = await UserModel.find(params.userId)
		
		const dateNow = moment(Date.now()).utc().format('YYYY-MM-DD')
		let getDailyPoints = (await user.points().where('date', dateNow).fetch()).toJSON()

		return getDailyPoints
	}
}

module.exports = PointController

'use strict'

const PointModel = use('App/Models/Point')
const UserModel = use('App/Models/User')
const moment = require('moment')

class PointController {
	async newPoint({ auth, response }) {
		const unixTimeStampMilli = Date.now()
		let flagIsEntryPoint = true
		const user_id = auth.user.userId
		const user = await UserModel.find(user_id)

		const date = moment(unixTimeStampMilli).utc().format('YYYY-MM-DD')
		const hour = moment(unixTimeStampMilli).utc().format('HH:mm')

		const storePoint = await PointModel.create({
			user_id,
			date,
			hour,
			unixTimeStampMilli
		})

		if (!storePoint)
			return response.status(500).send({
				error: {
					message: 'Alguma coisa deu errado ao tentar marcar o ponto',
					name: 'Internal Serve Error',
					status: 500
				}
			})

		const getDailyPoints = (await user.points().where('date', date).fetch()).toJSON()
		if (getDailyPoints.length % 2 == 0) flagIsEntryPoint = false

		return response
			.status(201)
			.send({ flagIsEntryPoint, message: 'Ponto criado com sucesso', name: 'Created', status: 201 })
	}

	async showPoints({ auth, request, response }) {
		const user = await UserModel.find(auth.user.userId)

		if (!user)
			return response
				.status(400)
				.send({ error: { message: 'Usuário não encontrado', name: 'Bad Request', status: 400 } })

		const dateNow = moment(Date.now()).utc().format('YYYY-MM-DD')
		const points = (await user.points().select('pointId', 'date', 'hour').where('date', dateNow).fetch()).toJSON()

		points.forEach((el, index) => {
			el.flagIsEntry = false
			if (index % 2 == 0) {
				el.flagIsEntry = true
			}
		})

		let getDailyPoints = {}
		getDailyPoints.userId = auth.user.userId
		getDailyPoints.username = user.username
		getDailyPoints.points = points

		return getDailyPoints
	}
}

module.exports = PointController

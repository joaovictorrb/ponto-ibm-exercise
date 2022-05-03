'use strict'

const { get } = require('@adonisjs/lucid/src/Factory')
const moment = require('moment')
const Point = require('../../Models/Point')
const RegistryModel = use('App/Models/Registry')
const UserModel = use('App/Models/User')
const PointModel = use('App/Models/Point')

class RegistryController {
	async newDailyRegistry({ auth, request, response }) {
		const userId = auth.user.userId
		const user = await UserModel.find(userId)
		const dateNow = moment(Date.now()).utc().format('YYYY-MM-DD')
		let referalMonth = moment(dateNow).locale('pt').startOf('month').format('MMMM').toUpperCase()
		let sumMinutos = 0
		let hoursExceeded = false
		let avaliableHours
		let tmp

		let getDailyPoints = (await user.points().where('date', dateNow).fetch()).toJSON()
		let getRegistryDate = (await user.registries().where('registryReferalDate', dateNow).fetch()).toJSON()

		if (getRegistryDate && getRegistryDate.length !== 0)
			return response
				.status(403)
				.send({ error: { message: `Registro ${dateNow} já existe`, name: 'Forbidden', status: 403 } })

		if (getDailyPoints.length % 2 == 1)
			return response
				.status(400)
				.send({ error: { message: 'Por favor, marcar o ponto de saída', name: 'Bad Request', status: 400 } })

		for (let i = 0; i < getDailyPoints.length; i++) {
			if (i % 2 == 0) {
				tmp = getDailyPoints[i + 1].unixTimeStampMilli - getDailyPoints[i].unixTimeStampMilli
				sumMinutos = sumMinutos + tmp
			}
		}
		// minutes
		sumMinutos = Math.floor(sumMinutos / 60000)
		// hours
		const hours = sumMinutos / 60

		avaliableHours = hours - 8
		if (hours > 8) {
			hoursExceeded = true
			avaliableHours = hours - 8
		}

		const storeRegistry = await RegistryModel.create({
			user_id: userId,
			registryReferalDate: dateNow,
			referalMonth,
			hoursExceeded,
			avaliableHours
		})

		if (!storeRegistry)
			return response.status(500).send({
				error: {
					message: 'Algo deu errado ao tentar salvar registro',
					name: 'Internal Server Error',
					status: 500
				}
			})

		return response.status(201).send({ message: 'Registro criado com sucesso', name: 'Created', status: 201 })
	}

	async showRegistry({ auth, params, response }) {
		const userId = auth.user.userId
		const user = await UserModel.find(userId)
		const dateNow = moment(Date.now()).utc().format('YYYY-MM-DD')
		const month = params.month
			? params.month
			: moment(dateNow).locale('pt').startOf('month').format('MMMM').toUpperCase()
		let finalResponse = []
		let arrayPoints = []
		let count = 0
		if (!user)
			return response
				.status(400)
				.send({ error: { message: 'Usuário não encontrado', name: 'Bad Request', status: 400 } })

		let getRegistry = (await UserModel.query()
			.with('registries', (builder) => {
				builder.where('referalMonth', month.toUpperCase())
			})
			.where('userId', userId)
			.fetch()).toJSON()

		for (let el of getRegistry[0].registries) {
			let points = (await PointModel.query()
				.select('hour')
				.where('date', el.registryReferalDate)
				.fetch()).toJSON()

			for (const point of points) {
				point.isEntry = count % 2 == 0 ? true : false
				arrayPoints.push([ point.hour, point.isEntry ])
				count++
			}
			const temporaryResponse = {
				registryReferalDate: el.registryReferalDate,
				referalMonth: el.referalMonth,
				hoursExceeded: el.hoursExceeded,
				avaliableHours: el.avaliableHours,
				points: arrayPoints
			}

			finalResponse.push(temporaryResponse)
		}

		return finalResponse
	}
}

module.exports = RegistryController

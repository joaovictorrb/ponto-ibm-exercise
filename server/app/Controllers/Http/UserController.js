'use strict'

const UserModel = use('App/Models/User')

class UserController {
	async createUser({ request, response }) {
		const data = request.only([ 'username', 'email', 'password' ])

		let checkUsernameEmail = (await UserModel.query()
			.select('username', 'email')
			.where('username', data.username)
			.orWhere('email', data.email)
			.fetch()).toJSON()

		checkUsernameEmail = checkUsernameEmail[0]

		if (checkUsernameEmail && checkUsernameEmail.email === data.email)
			return response.status(403).send({
				error: { message: 'Email já existe', name: 'Forbidden', status: 403 }
			})
		if (checkUsernameEmail && checkUsernameEmail.username === data.username)
			return response.status(403).send({
				error: { message: 'Username já existe', name: 'Forbidden', status: 403 }
			})

		const createUser = await UserModel.create(data)

		if (!createUser)
			return response.status(500).send({
				error: { message: `Algo de errado aconteceu`, name: 'Internal Server Error', status: 500 }
			})

		return response.status(201).send({ message: 'Usuário criado com sucesso!', name: 'SUCESSO', status: 201 })
	}
}

module.exports = UserController

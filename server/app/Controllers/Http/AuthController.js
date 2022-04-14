'use strict'

class SessionController {
  async verifySession({ response, auth }) {
    try {
      const user = await auth.check();

      let responseData = {}
      responseData.userId = user.userId
      responseData.username = user.username
      responseData.email = user.email

      response.ok(responseData)
    } catch (error) {
      response.unauthorized({ message: "Missing or invalid jwt token" })
    }
  }

  async verifyUser({ request, auth, response }) {
    const data = request.only(["email", "password"])

    const token = await auth.attempt(data.email, data.password)
    
    response.ok(token)
  }
}

module.exports = SessionController;
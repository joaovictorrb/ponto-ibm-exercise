'use strict'

class SessionController {
  async verifySession({ response, auth }) {
    try {
      await auth.check();
      response.ok(auth.user)
    } catch (error) {
      response.unauthorized({ message: "Missing or invalid jwt token" })
    }
  }

  async verifyUser({ request, auth, response }) {
    const data = request.only(["email", "password"])

    const token = await auth.attempt(data.email, data.password)
    
    let tokenData = {data: token}
    
    response.ok(tokenData);
  }
}

module.exports = SessionController;
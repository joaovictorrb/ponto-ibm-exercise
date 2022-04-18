export interface UserType {
  userId: Number
  username: String
	email: String
}

export interface AuthContextData {
  isLogged: Boolean
  userData: UserType | {}
  SignIn(email: String, password: String): Promise<void>
}

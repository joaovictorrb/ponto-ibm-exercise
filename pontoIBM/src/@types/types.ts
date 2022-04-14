export interface UserType {
  userId: Number
  username: String
	email: String
}

export interface AuthContextData {
  isLogged: Boolean
  user: UserType | null
  SignIn(email: String, password: String): Promise<void>
}

export interface AuthContextData {
  userData: Object | null
  isLogged: Boolean
  SignIn(email: String, password: String): Promise<void>
  SignOut(): void
  getUserData(): Promise<void>
}

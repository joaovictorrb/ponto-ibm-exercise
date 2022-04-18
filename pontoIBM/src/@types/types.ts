export interface AuthContextData {
  userData: Object | null
  isLogged: Boolean
  SignIn(email: String, password: String): Promise<void>
  SignOut(): void
  getUserData(): Promise<void>
}

export interface DataContextData {
  userPoint: Object | null
  isLogged: Boolean
  getUserPoint(): Promise<void>
}

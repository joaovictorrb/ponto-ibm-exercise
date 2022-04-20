export interface AuthContextData {
  userData: Object | null;
  isLogged: Boolean;
  SignIn(email: String, password: String): Promise<void>;
  SignOut(): void;
}

export interface DataContextData {
  userPoint: Object | null;
  userRegistry: Object | null;
  getUserPoint(): Promise<void>;
  getUserRegistry(): Promise<void>;
}

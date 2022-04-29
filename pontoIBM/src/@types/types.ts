export interface AuthContextData {
  userData: Object | null;
  isLogged: Boolean;
  SignUp(email: String, username: String, password: String): Promise<void>;
  SignIn(email: String, password: String): Promise<void>;
  SignOut(): void;
}

export interface DataContextData {
  userPoint: Object | null;
  userRegistry: Object | null;
  recordPoints: Object | null;
  flagIsEntry: Boolean;

  getUserPoint(): Promise<void>;
  getUserRegistry(monthInput: string): Promise<void>;
  handleSubmit(event: any): Promise<void>;
  submitToRegistry(): Promise<void>;
}

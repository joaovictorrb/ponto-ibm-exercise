export interface UserType {
   data: {
       userId: number
       username: string
       email: string
       token: string
   }
}

export type UserContextType = {
    user: UserType
    saveUser: (user: UserType) => void
    updateUser: (userId: number) => void
}


// Interface do provider
export interface AuthContextData {
    signed: boolean;
    userIsLogged: object | null;
    userLogin: (email: String, password: String) => Promise<void>;
    LogIn(): Promise<unknown>;
    LogOut(): void;
  }
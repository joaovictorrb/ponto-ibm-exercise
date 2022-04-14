export interface IUser {
    userId: number
    username: string
    email: string
    token: string
}

export type UserContextType = {
    user: IUser
    saveUser: (user: IUser) => void
    updateUser: (userId: number) => void
}
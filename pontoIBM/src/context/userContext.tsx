import { View, Text } from 'react-native'
import React, { createContext } from 'react'
import { UserContextType, IUser } from '../@types/user'

export const UserContext = createContext<UserContextType | null>(null)

export const UserProvider = props => {

}

// export const UserContext = ({ children }) {

// }
import type { IUser } from './IUser'

export interface IChatState {
  user: IUser
  lastSeen: 'last seen recently' | 'online'
  chatHistory: IHistory[]
}

export interface IHistory {
  message: string
  senderId: number
  createdAt: string
}

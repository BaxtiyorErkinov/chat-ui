import { mockData } from '@/mockData'
import type { IChatState, IHistory } from '@/models/IChat'
import type { IUser } from '@/models/IUser'
import { defineStore } from 'pinia'

interface IChatStore {
  defaultUser: IUser
  chat: IChatState[]
  selectedRoom: IChatState | null
  query: string
}

export const useChatState = defineStore('chatState', {
  state: (): IChatStore => ({
    defaultUser: {
      fullName: 'Baxtiyor Erkinov',
      userId: 1
    },
    chat: mockData,
    selectedRoom: null,
    query: ''
  }),
  getters: {
    getAllChat(): IChatState[] {
      if (!this.query.length) return this.chat

      return this.chat.filter((chat) =>
        chat.user.fullName.toLocaleLowerCase().includes(this.query.toLowerCase())
      )
    }
  },
  actions: {
    setSelectedRoom(roomID: IChatState['roomID']) {
      this.selectedRoom = this.chat.find((room) => room.roomID === roomID) || null
    },
    addMessage(message: IHistory, roomID: number) {
      console.log(message)
      if (!roomID) {
        alert('Please select the room')
      }
      const room = this.chat.findIndex((chat) => chat.roomID === roomID)
      this.chat[room].chatHistory.push(message)
    },
    getSelectedRoomMess(roomID: number) {
      console.log('call', roomID)
      const room = this.chat.findIndex((chat) => chat.roomID === roomID)
      return this.chat[room]
    }
  }
})

import type { IChatState } from './models/IChat'

export const mockData: IChatState[] = [
  {
    user: {
      fullName: 'Erkinov Baxtiyor',
      userId: 1
    },
    lastSeen: 'online',
    chatHistory: [
      {
        createdAt: 'May 13 13:13',
        message: 'Salom',
        senderId: 1
      }
    ]
  },
  {
    user: {
      fullName: 'Erkinov Baxtiyor',
      userId: 2
    },
    lastSeen: 'last seen recently',
    chatHistory: [
      {
        createdAt: 'May 13 13:13',
        message: 'Salom',
        senderId: 2
      }
    ]
  }
]

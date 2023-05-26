import type { IChatState } from './models/IChat'

export const mockData: IChatState[] = [
  {
    roomID: 1,
    user: {
      fullName: 'Erkinov Diyor',
      userId: 2
    },
    lastSeen: 'online',
    chatHistory: [
      {
        createdAt: '13:13',
        message: 'Salom',
        senderId: 1
      },
      {
        createdAt: '13:13',
        message: 'Salom',
        senderId: 2
      },
      {
        createdAt: '13:13',
        message: 'Salom',
        senderId: 1
      }
    ]
  },
  {
    roomID: 2,
    user: {
      fullName: 'Erkinov Sardor',
      userId: 3
    },
    lastSeen: 'last seen recently',
    chatHistory: [
      {
        createdAt: '13:13',
        message: 'Salom',
        senderId: 3
      },
      {
        createdAt: '13:13',
        message: 'Salom',
        senderId: 1
      },
      {
        createdAt: '13:13',
        message: 'Salom',
        senderId: 3
      }
    ]
  }
]

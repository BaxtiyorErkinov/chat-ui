import ChatContainer from './chat-view.vue'
import Room from './chat-room.vue'

export const chatRoute = [
  {
    path: '/',
    component: ChatContainer,
    children: [
      {
        path: '/:roomID',
        component: Room
      }
    ]
  }
]

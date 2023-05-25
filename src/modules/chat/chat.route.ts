import ChatContainer from './chat-view.vue'
import Room from './chat-room.vue'
import Empty from './components/empty.vue'

export const chatRoute = [
  {
    path: '/',
    component: ChatContainer,
    children: [
      {
        path: '/',
        component: Empty
      },
      {
        path: '/:roomID',
        component: Room
      }
    ]
  }
]

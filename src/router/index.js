import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue';
import lecturerEmail from '../components/MessageWithLecturerMail.vue';
import MessageItem from '../components/MessageItem.vue';
import sendMessage from '../components/SendMessage.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/getbymessageid', component: MessageItem },
  { path: '/messageWithlecturermail', component: lecturerEmail },
  { path: '/sendMessage', component: sendMessage },
];

const router = createRouter({
  history: createWebHistory('http://localhost:8383/'), // Replace with your actual URL
  routes: routes
})
export default router

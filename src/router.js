import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SpeachTimer from './components/SpeachTimer.vue';
import QuestionTimer from './components/QuestionTimer.vue';
import WaitTimer from './components/WaitTimer.vue';
import Setting from './components/Setting.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/SpeachTimer',
      name: 'speachtimer',
      component: SpeachTimer,
    },
    {
      path: '/QuestionTimer',
      name: 'questiontimer',
      component: QuestionTimer,
    },
    {
      path: '/WaitTimer',
      name: 'waittimer',
      component: WaitTimer,
    },
    {
      path: '/Setting',
      name: 'setting',
      component: Setting
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CharacterList from './views/CharacterList.vue'
import CharacterDetails from './views/CharacterDetails.vue'
import Quotes from './views/Quotes.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/characters',
      name: 'characters',
      component: CharacterList
    },
    {
      path: '/characters/:name',
      name: 'characterDetails',
      component: CharacterDetails
    },
    {
      path: '/quotes',
      name: 'quotes',
      component: Quotes
    }
  ]
})

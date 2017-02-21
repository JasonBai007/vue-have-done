import Vue from 'vue'
import Router from 'vue-router'
import Bar from 'components/Bar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Bar',
      component: Bar
    }
  ]
})

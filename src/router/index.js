import Vue from 'vue'
import Router from 'vue-router'
import SVGCreator from '@/components/SVGCreator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SVGCreator',
      component: SVGCreator
    }
  ]
})

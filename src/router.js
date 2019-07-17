import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Calculation from './views/Calculation.vue'
import Main2 from './views/Main2.vue'
import Main2Level1 from './views/main2/level1.vue'
import Main2Level2ing from './views/main2/level2ing.vue'
import Main2Level2 from './views/main2/level2.vue'

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [{
    path: '/langrisser/',
    component: Home
  },{
    path: '/langrisser/calculation',
    component: Calculation
  },{
    path: '/langrisser/main2',
    component: Main2,
    children: [
      {
        path: 'level1',
        component: Main2Level1
      },
      {
        path: 'level2ing',
        component: Main2Level2ing
      },
      {
        path: 'level2',
        component: Main2Level2
      }
    ]
  }]
})

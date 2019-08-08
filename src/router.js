import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Calculation from './views/Calculation'
import Main2 from './views/Main2'
import Main2Level1 from './views/main2/level1'
import Main2Level2ing from './views/main2/level2ing'
import Main2Level2 from './views/main2/level2'
import Main2Level1_5 from './views/main2/level1-5'
import Anniversary from './views/main2/anniversary'

Vue.use(VueRouter);

export default new VueRouter({
  routes: [{
    path: '/',
    component: Home
  },{
    path: '/calculation',
    component: Calculation
  },{
    path: '/main2',
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
      },
      {
        path: 'level1-5',
        component: Main2Level1_5
      },
      {
        path: 'anniversary',
        component: Anniversary
      }
    ]
  }]
})

const routes = [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/login.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('../views/detail/detail.vue')
    },
    {
      path: '/registry',
      name: 'registry',
      component: () => import('../views/registry/registry.vue')
    },
    {
      path: '/index',
      name: 'index',
      children:[
        {
          path:'home',
          name:'home',
          component:()=>import('../views/index/home/home.vue')
        },
        {
          path:'classisy',
          name:'classisy',
          component:()=>import('../views/index/classisy/classisy.vue')
        },
        {
          path:'car',
          name:'car',
          component:()=>import('../views/index/car/car.vue')
        },
        {
          path:'my',
          name:'my',
          component:()=>import('../views/index/my/my.vue')
        }
      ],
      component: () => import('../views/index/index.vue')
    },
    {
      path:'/',
      redirect:'/index'
    }
  ]
  export default routes
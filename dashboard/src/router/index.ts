import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'TheAdmin',
      component: () => import('@/views/AdminView.vue'),
      children: [
        {
          path: 'dashboard',
          name: 'TheDashboard',
          component: () => import('@/pages/Dashboard.vue')
        },
        {
          path: 'category',
          name: 'TheCategory',
          component: () => import('@/pages/Category/index.vue'),
          children: [
            {
              path: 'list',
              name: 'TheCategoryList',
              component: () => import('@/pages/Category/CategoryList.vue')
            },
            {
              path: 'add',
              name: 'TheCategoryAdd',
              component: () => import('@/pages/Category/CategoryAdd.vue')
            },
            {
              path: 'edit/:id',
              name: 'TheCategoryEdit',
              component: () => import('@/pages/Category/CategoryAdd.vue')
            }
          ]
        }
      ]
    }
  ]
})

export default router

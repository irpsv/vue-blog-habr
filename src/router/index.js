import VueRouter from 'vue-router'
import blog from './blog'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('@/pages/Index.vue'),
    },
    /**
     * Когда проект большой, роуты лучше выносить в отдельные файлы
     * Распределенные по модулям приложения
     * В данном случае это излишне и это просто демонстрация
     */
    ...blog,
    {
      path: '*',
      name: '404',
      component: () => import('@/pages/404.vue'),
    },
  ]
})
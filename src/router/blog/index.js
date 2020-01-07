export default [
  {
    path: '/cat-:category_id',
    name: 'Category',
    component: () => import('@/pages/Category.vue'),
  },
  {
    path: '/post-:post_id',
    name: 'Article',
    component: () => import('@/pages/Article.vue'),
  },
];
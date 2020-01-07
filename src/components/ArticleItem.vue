<template>
  <b-card :title="item.title" class="article-item-card">
    <router-link :to="getArticleRoute" class="card-link">
      Подробнее
    </router-link>
  </b-card>
</template>

<script>
import Article from '@/models/Article';

export default {
  name: 'ArticleItem',
  props: {
    item: Article,
  },
  computed: {
    getArticleRoute() {
      return {
        name: 'Article',
        params: {
          post_id: this.item.id,
        },
      };
    },
  },
}
</script>

<style>
.article-item-card {
  margin-bottom: 1rem;
}
</style>
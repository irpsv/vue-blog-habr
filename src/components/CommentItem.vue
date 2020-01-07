<template>
  <b-card>
    <b-card-text>
      {{ item.content }}
    </b-card-text>
    <router-link :to="getArticleRoute">
      Перейти к статье
    </router-link>
  </b-card>
</template>

<script>
import Comment from '@/models/Comment';

export default {
  name: 'CommentItem',
  props: {
    item: Comment,
  },
  computed: {
    getArticleRoute() {
      return {
        name: 'Article',
        params: {
          post_id: this.item.article_id,
        },
      };
    },
  },
}
</script>
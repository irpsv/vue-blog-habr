<template>
  <div>
    <div v-if="category">
      <h1>
        {{ category.title }}
      </h1>
      <ArticleItems :items="articles" :cols="2"></ArticleItems>
    </div>
    <div v-else>
      Категория не найдена
    </div>
  </div>
</template>

<script>
import ArticleItems from '@/components/ArticleItems.vue'
import {
  mapActions,
} from 'vuex'

export default {
  name: 'Category',
  components: {
    ArticleItems,
  },
  computed: {
    categoryId() {
      return this.$route.params['category_id'] || null;
    },
    category() {
      return this.$store.state.blog.activeCategory;
    },
    articles() {
      return this.$store.getters.activeCategoryArticles;
    },
  },
  methods: {
    ...mapActions([
      'loadActiveCategory',
    ]),
  },
  mounted() {
    this.loadActiveCategory(this.categoryId);
  },
}
</script>
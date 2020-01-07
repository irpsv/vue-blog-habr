<template>
  <b-row v-if="article">
    <b-col md="8" lg="9">
      <h1>
        {{ article.title }}
      </h1>
      <p class="mb-4">
        {{ article.content }}
      </p>

      <table class="table table-bordered">
        <tbody>
          <tr>
            <td class="w-50">
              <router-link v-if="prevArticle" :to="getArticleRoute(prevArticle)">
                {{ prevArticle.title }}
              </router-link>
            </td>
            <td class="text-right">
              <router-link v-if="nextArticle" :to="getArticleRoute(nextArticle)">
                {{ nextArticle.title }}
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>

      <CommentForm :articleId="article.id"></CommentForm>
      <CommentItem v-for="(item, index) in article.comments" :key="index" :item="item"></CommentItem>
    </b-col>
    <b-col md="4" lg="3">
      <CommentItem v-for="(item, index) in lastComments" :key="index" :item="item"></CommentItem>
    </b-col>
  </b-row>
</template>

<script>
import CommentForm from '@/components/CommentForm.vue';
import CommentItem from '@/components/CommentItem.vue';
import {
  mapActions,
  mapGetters,
} from 'vuex'

export default {
  name: 'Article',
  components: {
    CommentForm,
    CommentItem,
  },
  computed: {
    ...mapGetters([
      'lastComments',
      'nextArticle',
      'prevArticle',
    ]),
    articleId() {
      return this.$route.params['post_id'] || null;
    },
    article() {
      return this.$store.state.blog.activeArticle;
    },
  },
  methods: {
    ...mapActions([
      'loadComments',
      'loadActiveArticle',
    ]),
    getArticleRoute(item) {
      return {
        name: 'Article',
        params: {
          post_id: item.id,
        },
      };
    },
  },
  mounted() {
    this.loadComments();
    this.loadActiveArticle(this.articleId);
  },
  watch: {
    articleId(value) {
      this.loadActiveArticle(value);
    },
  },
}
</script>
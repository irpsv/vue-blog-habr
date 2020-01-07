<template>
  <form @submit.prevent="onSubmit">
    <textarea class='form-control' v-model="content"></textarea>
    <br>
    <button type="submit" class="btn btn-primary">Сохранить</button>
  </form>
</template>

<script>
export default {
  name: 'CommentForm',
  props: {
    articleId: Number,
  },
  data() {
    return {
      content: '',
    };
  },
  methods: {
    onSubmit() {
      if (this.content) {
        this.$store.dispatch('addComment', {
          content: this.content,
          article_id: this.articleId,
        });
        this.content = '';
      }
    },
  },
}
</script>